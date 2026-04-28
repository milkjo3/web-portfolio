import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="nav-bar">
        <h1 className="nav-name">JOSEPH MILLIKEN</h1>
        <div className="nav-links">
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </>
  );
}
