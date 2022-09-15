import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome</span>
        <span className="headerTitleLg">Information</span>
      </div>
      <img
        className="headerImg"
        src="https://www.pngfind.com/pngs/m/240-2405208_transparent-nature-background-png-png-download.png"
        alt=""
      />
    </div>
  );
}
