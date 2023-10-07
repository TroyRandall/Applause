import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { storage } from "../../firebase";
<<<<<<< HEAD
import { auth } from "../../firebase";
=======
>>>>>>> 3248a660 (truncated history)
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import defaultCoverPhoto from "./defaultCoverPhoto.jpg";

import "./profilePage.css";

function ProfilePage() {
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
<<<<<<< HEAD
  const [imageURL, setImageUrl] = useState("");

  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (imageUpload) uploadImage();
  }, [imageUpload]);
=======

  const currentUser = useSelector((state) => state.session.user);

>>>>>>> 3248a660 (truncated history)
  const toggleModal = () => {
    setToggle(true);
  };

  const UlClassName = "overlay" + (toggle ? "" : "hidden");

<<<<<<< HEAD
  const uploadImage = (e) => {
    if (imageUpload === null) return;
    console.log(auth.currentUser);
    const imageRef = ref(storage, `images/${id}/${imageUpload?.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((response) => {
      getDownloadURL(response.ref).then((res) => setImageUrl(res));
=======
  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((response) => {
      console.log(response);
>>>>>>> 3248a660 (truncated history)
      alert("Your Image Has Been Uploaded");
    });
  };

<<<<<<< HEAD
  console.log(imageUpload);
=======
>>>>>>> 3248a660 (truncated history)
  const checkModal = () => {
    if (toggle) {
      return (
        <div className={UlClassName} id="overlay">
          <div id="create-post-component-container">
<<<<<<< HEAD
            <div id="create-post-content-container">
              <div id="create-post-preview-container" className="card">
                <img
                  className="card-image"
                  src={
                    imageURL ||
                    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsilkbrassband.co.uk%2Fimages%2Fno-image-selected.png&f=1&nofb=1&ipt=a5dcee0e8b2c0881ad6c2ce98c40fda72103f183d50b8efa43a13362a7cd006a&ipo=images"
                  }
                  alt={description || "No Image Available"}
                  id="create-post-user-image"
                />
                <h2 id="create-post-preview-title" className="card-title">
                  {postTitle || "Post Title"}
                </h2>

                <p id="create-post-preview-description" className="card-body">
                  {description || "Post Description Goes Here..."}
                </p>

                <h3 id="create-post-preview-username" className="footer">
                  Post Created By {currentUser?.username}
                </h3>
                <span className="date">
                  {auth?.currentUser?.metadata?.lastSignInTime?.slice(0, 12)}
                </span>
              </div>
              <div id='create-post-forms-container'>
              <form id="create-post-component" className="form2">
                <h2 className="form-title">Create Your Post</h2>
                <p className="form-paragraph">
                  Share Your Thoughts, Photos, and Music
                </p>
                <div className="form-group">
                  <label for='post-title'>Post Title</label>
                  <input
                    type="text"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    placeholder="Title..."
                    required
                    id="post-title"
                  />
                </div>

                <div className="form-group">
                  <label for="post-description">Post Details</label>
                  <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please Enter Some Details About Your Post..."
                    required
                    id="post-description"
                  />{" "}
                </div>

                <div className="form-group">
                  <label for="music-input">Music Input</label>
                  <input
                    required=""
                    id="music-input"
                    accept="audio/*"
                    type="file"
                  />
                </div>
              </form>{" "}
              <form className="form">
                <span className="form-title">Upload your file</span>
                <p className="form-paragraph">File should be an image</p>
                <label for="file-input" className="drop-container">
                  <span className="drop-title">Drop files here</span>
                  or
                  <input
                    type="file"
                    accept="image/*"
                    required=""
                    id="file-input"
                    onChange={(e) => setImageUpload(e.target.files[0])}
                  />
                </label>
                <button type="submit">Create Post</button>
              </form></div>
=======
            <h2>Create Your Post</h2>
            <div id='post-preview'>
              <img />
              <h2>{postTitle ? postTitle : 'Post Title'}</h2>
              <p id='post-description-preview'></p>
            </div>
            <div id="create-post-component">
              <label>Post Title</label>
              <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="Title..."
                required
              />
              <label>Choose Your Image</label>
              <input
                type="file"
                onChange={(e) => setImageUpload(e.target.files[0])}
              />
              <button onClick={uploadImage}>Upload Image</button>
              <label>Post Details</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please Enter Some Details About Your Post..."
                required
              />{" "}
>>>>>>> 3248a660 (truncated history)
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div id="profile-page-container">
      <img
        id="profile-page-cover-photo"
        src={defaultCoverPhoto}
        alt="a crowd going crazy at a concert"
      />
      <div id="profile-page-first-row">
        <img
          id="profile-page-user-image"
          src={currentUser?.imageUrl}
          alt="a profile for an applause user account"
        />
        <div id="profile-page-user-info">
          {" "}
          <h2 id="profile-page-full-name">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2>
          <h4 id="profile-page-username">{currentUser?.username}</h4>
          <p id="profile-page-about-me">{currentUser?.aboutMe}</p>{" "}
          <div id="create-post-button">
            <button id="create-post" onClick={toggleModal}>
              Create post
            </button>
            {checkModal()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
