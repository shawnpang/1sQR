import os
from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
from image import convert_images_to_PDF, clean_cache
from werkzeug.datastructures import FileStorage


# Initialize the REST app and database
app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/media_database.db'
UPLOAD_DIRECTORY = "./images"
db = SQLAlchemy(app)



# Define the structure for the database that stores all the media
class MediaModel(db.Model):
    # Define the fields of the database
    id = db.Column(db.Integer, primary_key=True)
    file_address = db.Column(db.String(150), nullable=False)
    access_code = db.Column(db.String(20), nullable=False)
    title = db.Column(db.String(100), nullable=False)
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
    'views': fields.Integer,
    'file_address':fields.String
}



# Parsers
upload_parser = reqparse.RequestParser()
upload_parser.add_argument('img', type=FileStorage,
                         location='files', help="please upload img")

class Test(Resource):
    def get(self):
        return{"hiii":"this works"}


# Use Case 1 - Upload images to create the media
class Upload(Resource):
    def post(self):
        print("POST Method")
        id = 1000
        last_entry = MediaModel.query.order_by(MediaModel.id.desc()).first()
        if last_entry:
            print("Last id is = ",last_entry.id)
            id = last_entry.id+1

        # Save all the upload images
        files = request.files
        image_order = {}
        for each in files:
            image = files[each]
            filename = secure_filename(image.filename)
            image.save(os.path.join('cache/',filename))
            image_order[int(each)] = os.path.join('cache/',filename)
            print(image_order)

        # convert the images to pdf and move to the media folder
        convert_images_to_PDF(img_dic= image_order,id=id)
        clean_cache()

        # Add the media entry to database
        media = MediaModel(id=id, title ="", views=0, access_code = "",
                           file_address="media/"+str(id)+"pdf")
        db.session.add(media)
        db.session.commit()

        # Return success
        return 201


# Use Case 2 - access the uploaded media
class QR(Resource):
    def get(self, media_id):
        result = MediaModel.query.filter_by(id=media_id).first()
        if not result:
            abort(404, message="Could not find the media with that id")

        path = result.path

        return {'title':result.title,
                'path':result.file_address,
                'views':result.views}, 201

# Use Case 2 - access the uploaded media
class View(Resource):
    def get(self, media_id):
        result = MediaModel.query.filter_by(id=media_id).first()
        if not result:
            abort(404, message="Could not find the media with that id")

        result.views = result.views+1
        db.session.add(result)
        db.session.commit()

        return {'title':result.title,
                'path':result.file_address,
                'views':result.views}, 201



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
api.add_resource(QR, "/qr/<int:media_id>")
api.add_resource(View, "/view/<int:media_id>")
api.add_resource(Manage, "/manage/<int:media_id>")
api.add_resource(Test, "/test")


if __name__ == "__main__":
    # app.run(debug=True, host='0.0.0.0')
    app.run(debug=True)
    print("Done!")
