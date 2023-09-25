from flask import Blueprint, request
from app.models import Post
from app.forms import CreatePostForm



post_routes = Blueprint('posts', __name__)

@post_routes.route('/<int:id')
def create_post(id):
    form = CreatePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate():
        newPost = Post(
            postTitle=form.data['postTitle'],
            postContent=form.data['postContent']
        )
