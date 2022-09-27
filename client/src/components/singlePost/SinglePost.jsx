import "./singlePost.css";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function SinglePost({url}) {
  const [post, setPost] = useState([]);

  const getSinglePost = () => {
      // Get the token from the localStorage
  const storedToken = localStorage.getItem("authToken");
 
  // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/post/${post._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => setPost(response.data)) //console.log(response.data)
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        {post.photo && <img className="postImg" src={post.photo} alt="post" />}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: {post.author}
            {/*Author: <b>Tanvi</b>*/}
          </span>
          <span className="singlePostDate">
            {" "}
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.content}</p>
      </div>
    </div>
  );
}
