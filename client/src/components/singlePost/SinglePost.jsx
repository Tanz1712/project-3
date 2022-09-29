import "./singlePost.css";

import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

const API_URL = "http://localhost:5005";

export default function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getSinglePost = () => {
      // Get the token from the localStorage
      const storedToken = localStorage.getItem("authToken");

      // Send the token through the request "Authorization" Headers
      axios
        .get(`${API_URL}/api/posts/${postId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => setPost(response.data)) //console.log(response.data)
        .catch((error) => console.log(error));
    };
    getSinglePost();
  }, [postId]);

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
          <span className="singlePostAuthor">Author: {post?.author?.name}</span>
          <span className="singlePostDate">
            {" "}
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.content}</p>
        <p className="singlePostDesc">{post?.categories?.name}</p>
      </div>
      
    </div>
  );
}
