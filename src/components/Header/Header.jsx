import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="nav-bar">
        <Link to="/" className="nav-name">
          <h1>JOSEPH MILLIKEN</h1>
        </Link>
        <div className="nav-links">
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </>
  );
}
