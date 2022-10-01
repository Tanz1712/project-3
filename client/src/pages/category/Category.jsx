import "./category.css";
import axios from "axios";

import { useState } from "react";

import { useContext } from "react";

import { AuthContext } from "../../context/auth.context";

import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

export default function Category() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState([]);

  const navigate = useNavigate();

  const handleNameInput = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = {
      name: name,
    };
    /* const body = { name: name }; */

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/categories/`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setName("");

        // Navigate to the `/` page
        navigate("/");
      });
  };

  return (
    <div className="category">
      <form className="createForm" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          <label>Categories</label>

          <input
            type="text"
            placeholder="name"
            className="createInput"
            autoFocus={true}
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </div>

        <button className="createSubmit" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
