import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const API_URL = "http://localhost:5005";

export default function Settings() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { user, logOutUser } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const [usere, setUsere] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [updateMode, setUpdateMode] = useState(false);

  const [success, setSuccess] = useState(false);

  // Get the URL parameter `:postId`
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleUser = () => {
      // Subscribe to the AuthContext to gain access to
      // the values from AuthContext.Provider `value` prop
      //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

      // Get the token from the localStorage
      const storedToken = localStorage.getItem("authToken");

      // Send the token through the request "Authorization" Headers
      axios
        .get(`${API_URL}/api/users/${user._id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const oneUser = response.data;
          console.log(response.data);
          setUsere(oneUser);
          setName(oneUser.name); //console.log(response.data)
          setEmail(oneUser.email);
          setPassword(oneUser.password);
        })
        .catch((error) => console.log(error));
    };
    getSingleUser();
  }, []);

  const handleFileInput = (e) => setFile(e.target.value);
  const handleNameInput = (e) => setName(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleUpdate = (e) => {
    // Prevent page reload on update
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = {
      // file: file,

      name,
      email,
      password,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .put(`${API_URL}/api/users/${user._id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setSuccess(true);

        // Once the delete request is resolved successfully
        // navigate back to the list of posts.
        // navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers

    // Make a DELETE request to delete the post
    axios //
      .delete(`${API_URL}/api/users/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        logOutUser();
        // Once the delete request is resolved successfully
        // navigate back to the list of posts.
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form action="" className="settingsForm" onSubmit={handleUpdate}>
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            {user.profilePic && (
              <img
                src="https://thumbs.dreamstime.com/z/standard-avatar-profilsymbol-des-social-media-benutzers-im-cliparts-stil-clipart-style-symbol-252803905.jpg"
                alt="Profile pic"
              />
            )}

            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              name="file"
              value={file}
              onChange={handleFileInput}
            />
          </div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder={name}
            onChange={handleNameInput}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder={email}
            onChange={handleEmailInput}
          />
          <label type="password" Password></label>
          <input
            type="password"
            name="password"
            onChange={handlePasswordInput}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
