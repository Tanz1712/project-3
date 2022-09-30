import "./write.css";

import { useState } from "react";

import axios from "axios";

import { useContext } from "react";

import { AuthContext } from "../../context/auth.context";

import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

export default function Write() {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [author, setAuthor] = useState(user._id);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const handleFileInput = (e) => setFile(e.target.value);
  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleContentInput = (e) => setContent(e.target.value);
  // const handleCategoryInput = (e) => setCategories(e.target.value);

  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the requestBody for the POST request
    const requestBody = {
      title: title,
      content: content,
      file: file,
      author,
      categories,
    };
    /* const requestBody = { title: title, content: content, author: user.name }; */

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/posts/`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTitle("");
        setContent("");
        setFile("");
        //  setCategories("");

        // Navigate to the `/` page
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="write">
      <img
        className="createImg"
        src="https://www.pngfind.com/pngs/m/240-2405208_transparent-nature-background-png-png-download.png"
        alt=""
      />
      <form className="createForm" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            name="file"
            value={file}
            onChange={handleFileInput}
          />

          <input
            type="text"
            placeholder="Title"
            className="createInput"
            name="title"
            value={title}
            onChange={handleTitleInput}
          />

          {/*  
               <div className="createFormGroup">
        <input
            type="text"
            placeholder="Categories"
            className="createInput"
            autoFocus={true}
            name="categories"
            value={categories}
            onChange={handleCategoryInput}
          />
           </div>
          */}
        </div>

        <div className="createFormGroup">
          <textarea
            placeholder="tell your story..."
            type="text"
            className="createInput createText"
            name="content"
            value={content}
            onChange={handleContentInput}
          ></textarea>
        </div>
        <button className="createSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
