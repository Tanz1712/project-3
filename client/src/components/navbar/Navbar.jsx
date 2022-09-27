import "./navbar.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

export default function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  //  Update the rendering logic to display different content
  //  depending on the user being logged in or not
  return (
    <div className="navbar">
      <div className="topLeft">
        {/* <i className="topIcon fa-solid fa-house"></i>*/}
        <ul className="logoSet">
          <li>
            <i className="logo fa-solid fa-heart-pulse"></i>
            <img src="" alt="" />
          </li>
          <li>Tell Your Story</li>
        </ul>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/about" className="link">
              ABOUT
            </Link>{" "}
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/contact" className="link">
              CONTACT
            </Link>{" "}
          </li>

          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={logOutUser}>
            {" "}
            {isLoggedIn && "LOGOUT"}{" "}
           
          </li>
          <span>{user && user.name}</span> 
        {/* {isLoggedIn && (
          <button onClick={logOutUser}>Logout</button>)}*/}
        </ul>
      </div>
      <div className="topRight">
        {isLoggedIn ? (
          <Link to="/settings">
            <img
              className="topImg"
              src="https://www.pngfind.com/pngs/m/240-2405208_transparent-nature-background-png-png-download.png"
              alt="Profile pic"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
