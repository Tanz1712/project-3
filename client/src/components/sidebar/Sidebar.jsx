import "./sidebar.css";

export default function Sidebar() {
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
          <li className="sidebarListItem">Diet</li>
          <li className="sidebarListItem">Gym</li>
          <li className="sidebarListItem">Nature</li>
          <li className="sidebarListItem">Mental Health</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
