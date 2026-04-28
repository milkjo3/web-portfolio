import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="nav-bar">
        <h1 className="nav-name">JOSEPH MILLIKEN</h1>

        <button
          className={`hamburger ${menu ? "open" : ""}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {menu && <div className="overlay" onClick={() => setMenu(false)} />}

        <div className={`nav-links ${menu ? "open" : ""}`}>
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </>
  );
}
