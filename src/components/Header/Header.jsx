import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="nav-bar">
        <h3 className="nav-name">
          <Link to="/">JOSEPH.exe</Link>
        </h3>

        <button
          className={`hamburger ${menu ? "open" : ""}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {menu && <div className="overlay" onClick={() => setMenu(false)} />}

        <nav
          className={`nav-links ${menu ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>
    </>
  );
}
