import "./login.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

const API_URL = "http://localhost:5005";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        // Save the token in the localStorage
        storeToken(response.data.authToken);

        // Verify the token by sending a request
        // to the server's JWT validation endpoint.
        authenticateUser();

        navigate("/"); // <== ADD
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email..."
          name="email"
          value={email}
          onChange={handleEmail}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit" className="loginButton">
          Login
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button className="loginRegisterButton">
        <Link className="link" to="{/register}">
          Register
        </Link>
      </button>
    </div>
  );
}
