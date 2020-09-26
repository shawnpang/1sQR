import os
from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename

# Initialize the REST app and database
app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/media_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
UPLOAD_DIRECTORY = "./images"
db = SQLAlchemy(app)


# Define the structure for the database that stores all the media
class MediaModel(db.Model):
    # ID is the randomly assigned unique of the media
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


class Upload(Resource):
    def get(self):
        return {"msg":"hiii"}

    def post(self):
        id = last_id+1
        if not request.files:
            abort(400, message="image should be uploaded")
        else:
            image = request.files['image']
            file_name = secure_filename(image.filename)
            image.save(os.path.join(UPLOAD_DIRECTORY, file_name))


        # args = video_put_args.parse_args()
        # result = VideoModel.query.filter_by(id=video_id).first()
        # if result:
        #     abort(409, message="video id is taken")
        #
        # video = VideoModel(id=video_id, name=args['name'], views=args['views'], likes=args['likes'])
        # db.session.add(video)
        # db.session.commit()
        return {'uploaded':file_name}, 201


api.add_resource(Upload, "/upload")


if __name__ == "__main__":
    app.run(debug=True)
    print("Done!")
