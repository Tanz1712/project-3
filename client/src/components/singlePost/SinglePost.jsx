import "./singlePost.css";

import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const API_URL = "http://localhost:5005";

export default function SinglePost() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // Get the URL parameter `:postId`
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSinglePost = () => {
      // Subscribe to the AuthContext to gain access to
      // the values from AuthContext.Provider `value` prop
      //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
      axios
        .get(`${API_URL}/api/posts/${postId}`) //, { headers: { Authorization: `Bearer ${storedToken}` } }
        .then((response) => {
          const onePost = response.data;
          setPost(onePost); //console.log(response.data)
          setTitle(onePost.title);
          setContent(onePost.content);
        })
        .catch((error) => console.log(error));
    };
    getSinglePost();
  }, [postId]);

  const handleUpdate = (e) => {
    // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, content };

    // Make a PUT request to update the project
    axios
      .put(`${API_URL}/api/posts/${postId}`, requestBody)
      .then((response) => {
        setUpdateMode(false);
        // Once the request is resolved successfully and the post
        // is updated we navigate back to the details page
        navigate(`/posts/${postId}`);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    // Make a DELETE request to delete the post
    axios
      .delete(`${API_URL}/api/posts/${postId}`) // , (post.author == req.payload._id)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of posts.
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  //  Update the rendering logic to display different content
  //  depending on the user being logged in or not
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="post" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}

            <div className="singlePostEdit">
              {/*  {((isLoggedIn) && (post.author == req.payload._id)) && ( )} */}
              <>
                <i
                  className="singlePostIcon fa-solid fa-pen"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i className="singlePostIcon fa-solid fa-trash">
                  onClick={handleDelete}
                </i>
              </>
            </div>
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: {post?.author?.name}</span>
          <span className="singlePostDate">
            {" "}
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{content}</p>
        )}

        {/*  <div>
        {post.categories.map((category) => (
          <li key={category._id}> 
          <p>{category.name}</p>
          </li>
        ))}
        </div>
        */}
        {/* <p className="singlePostDesc">Categories: {post?.categories?.name}</p> */}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
