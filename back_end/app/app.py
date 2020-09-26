from flask import Flask, render_template, request, redirect, jsonify,send_from_directory
import os 
from flask_restful import Resource, Api
from werkzeug.utils import secure_filename
from pathlib import Path
import uuid 


Path(__file__).parent



UPLOAD_DIRECTORY = "./data"

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)


app = Flask(__name__)

@app.route('/upload', methods=["POST"])
def upload():
    if request.files:
        pic = request.files["image"]
        fileName = secure_filename(pic.filename)
        pic.save(os.path.join(UPLOAD_DIRECTORY, fileName))
    
        return jsonify({"Uploaded":fileName})
                
@app.route('/getImage/<path:path>', methods =["GET"])
def getImage(path):
    unique_filename = str(uuid.uuid4())
    print(unique_filename)
    return send_from_directory(UPLOAD_DIRECTORY,path, as_attachment = True)
                
@app.route('/')
def main():
    return render_template("upload.html")





@app.route("/upload-image", methods=["GET","POST"])
def upload_image():
    if request.method == "POST":
        if request.files:
            image = request.files["image"]
            print(image)
            
        return redirect(request.url)
    
    
    
    return render_template("upload.html")
    
    




