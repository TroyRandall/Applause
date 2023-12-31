from .db import db, environment, SCHEMA, add_prefix_for_prod

class Post(db.Model):
    __tablename__='posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id=db.Column(db.Integer, primary_key=True)
    userId=db.Column(db.Integer,  db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
<<<<<<< HEAD
    postTitle = db.Column(db.String())
=======
>>>>>>> 3248a660 (truncated history)
    postContent = db.Column(db.String(255), nullable=False)
    imageSrc = db.Column(db.String())
    musicSrc = db.Column(db.String())
    videoSrc = db.Column(db.String())


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'postContent': self.postContent,
            'imageSrc': self.imageSrc,
            'musicSrc': self.musicSrc,
            'videoSrc': self.videoSrc
        }
