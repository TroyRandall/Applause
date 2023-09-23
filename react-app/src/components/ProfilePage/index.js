import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { storage } from "../../firebase";
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

  const currentUser = useSelector((state) => state.session.user);

  const toggleModal = () => {
    setToggle(true);
  };

  const UlClassName = "overlay" + (toggle ? "" : "hidden");

  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((response) => {
      console.log(response);
      alert("Your Image Has Been Uploaded");
    });
  };

  const checkModal = () => {
    if (toggle) {
      return (
        <div className={UlClassName} id="overlay">
          <div id="create-post-component-container">
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
