import "./register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { name, email, password };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/api/auth/register`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm" onSubmit={handleRegisterSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          name="name"
          value={name}
          onChange={handleName}
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          name="email"
          value={email}
          onChange={handleEmail}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit" className="registerButton">
          Register
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button className="registerLoginButton">
        <Link className="link" to={"/login"}>
          Login
        </Link>
      </button>
    </div>
  );
}
