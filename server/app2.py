import os
from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
from image import convertImagesToPDF

# Initialize the REST app and database
app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/media_database.db'
UPLOAD_DIRECTORY = "./images"
db = SQLAlchemy(app)


# Define the structure for the database that stores all the media
class MediaModel(db.Model):
    # ID is the randomly assigned unique index of the media
    id = db.Column(db.Integer, primary_key=True)
    # File address is the relative file address of the media's pdf file
    file_address = db.Column(db.String(150), nullable=False)
    # Access code is the only and non-changeable credentials to manage the media
    access_code = db.Column(db.String(20), nullable=False)
    # Title is the title of the pdf file
    title = db.Column(db.String(100), nullable=False)
    # Views is the count of visits to that media's page
    views = db.Column(db.Integer, nullable=False)

    # Create a string representation of the data entry
    def __repr__(self):
        return f"Media(title={self.title}, views={self.views}, file_address={self.file_address}"


# This will only create the database in first run and ignored if the database already exists
db.create_all()

# Serialization template for each entry in the database
resource_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'access_code': fields.Integer,
    'likes': fields.Integer,
    'file_address':fields.String
}

#test - should not be used
last_id = 0

# Use Case 1 - Upload images to create the media
class Upload(Resource):
    @marshal_with(resource_fields)
    def post(self):
        # Check if the files are uploaded (maybe also check if image exists?)
        if not request.files:
            abort(400, message="image should be uploaded")

        # Generate an ID for the new uploaded media
        id = last_id + 1

        #CHECK HERE!!!!!
        # Save all the images in the cache folder
        image = request.files['image']
        file_name = secure_filename(image.filename)
        image.save(os.path.join(UPLOAD_DIRECTORY, file_name))

        images_address = []
        # Example:
        # [0:"cache/IMAGE888.jpg",1:"cache/SHAWN.jpg"]

        # Call image converting function to convert pages
        pdf_file_address = convertImagesToPDF(images_address)


        media = MediaModel(id=id, name="", views=0, access_code = "", file_address=pdf_file_address)
        db.session.add(media)
        db.session.commit()
        return media, 201


# Use Case 2 - access the uploaded media
class View(Resource):
    pass


# Use Case 3 - manage the media with access code to update or delete
class Manage(Resource):
    @marshal_with(resource_fields)

    # Update the media title or pdf file with id and access code
    def put(self, id):
        pass


    # Permanently delete the media with id and access code
    def delete(self, id):
        pass





api.add_resource(Upload, "/upload")
api.add_resource(View, "/view/<Integer:id>")
api.add_resource(Manage, "/manage/<Integer:id>")

if __name__ == "__main__":
    app.run(debug=True)
    print("Done!")
