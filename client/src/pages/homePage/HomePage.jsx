import Header from "../../components/header/Header";
import "./homePage.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    axios
      .get(`${API_URL}/api/posts`)
      .then((response) => setPosts(response.data)) //console.log(response.data)
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
