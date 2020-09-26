from flask import Flask, render_template, request, redirect
import os 
from firebase_admin import credentials, firestore

app = Flask(__name__)


cred = credentials.Certificate("/sbuhacks-1sqr-firebase-adminsdk-66hto-3981f9b275.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


@app.route("/upload-image", methods=["GET","POST"])
def upload_image():
    if request.method == "POST":
        if request.files:
            image = request.files["image"]
            print(image)
            
        return redirect(request.url)
    
    
    
    return render_template("upload.html")
    
    




