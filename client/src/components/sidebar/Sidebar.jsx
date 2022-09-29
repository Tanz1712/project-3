import "./sidebar.css";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  const getAllCats = () => {
    axios
      .get(`${API_URL}/api/categories`)
      .then((response) => setCats(response.data)) //console.log(response.data)
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://www.pngfind.com/pngs/m/240-2405208_transparent-nature-background-png-png-download.png"
          alt=""
        />
        <p>
          dtbdtttttttttttttttttttttttttttttttndrtnfgfccgcgh
          dtbdtttttttttttttttttttttttttttttttndrtnfgfccgcgh
          dtbdtttttttttttttttttttttttttttttttndrtnfgfccgcgh
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {/* {
          cats.map(c=>(
            <li className="sidebarListItem">{c.name}</li>
          ))
        }*/}
          {cats.map((c) => {
            return (
              <div className="sidebarListItem" key={c._id}>
                <li className="sidebarListItem">{c.name}</li>
              </div>
            );
          })}

          {/* <li className="sidebarListItem">Diet</li>
          <li className="sidebarListItem">Gym</li>
          <li className="sidebarListItem">Nature</li>
          <li className="sidebarListItem">Mental Health</li>*/}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        {/* <div className="sidebarSocial">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
        </div> */}
        <adress>
          <a href="mailto:tanvi.monitors@gmail.com" className="link" style={{color:"orange"}}>Tanvi Gurjar </a>
        </adress>
      </div>
    </div>
  );
}
