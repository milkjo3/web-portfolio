import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <>
      <header className="nav-bar">
        <h3 className="nav-name">
          <Link to="/">JOSEPH.exe</Link>
        </h3>

        <button
          className={`hamburger ${menu ? "open" : ""}`}
          onClick={() => setMenu((currentMenu) => !currentMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`nav-links ${menu ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#projects" onClick={closeMenu}>
            PROJECTS
          </a>
          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
        </nav>
      </header>
      {menu && (
        <div
          className="overlay"
          onClick={() => setMenu(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
