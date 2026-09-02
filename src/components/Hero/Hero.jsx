import "./Hero.css";

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
            I'm <strong>Joseph Milliken</strong>, a recent graduate with a B.S.
            in Computer Science. I build secure, scalable, production-ready
            applications focused on performance and real-world impact.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.thenewstack.io/media/2026/03/f130d45c-code-input-1024x819.jpg"
            alt=""
          />
        </div>

        <a className="hero-scroll-link" href="#projects">
          <span className="hero-scroll-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </>
  );
}
