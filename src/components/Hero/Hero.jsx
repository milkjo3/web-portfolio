import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h2>
            FULL STACK <br />
            SOFTWARE ENGINEER
          </h2>
          <p>
            I'm <strong>Joseph</strong>, a recent graduate with a B.S. in
            Computer Science. I build scalable, production-ready applications
            focused on performance and real-world impact.
          </p>
          <button>VIEW PROJECTS</button>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.thenewstack.io/media/2026/03/f130d45c-code-input-1024x819.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
