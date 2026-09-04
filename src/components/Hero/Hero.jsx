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
            src={`${import.meta.env.BASE_URL}dan-counsell-unsplash-1600.webp`}
            width="1600"
            height="1067"
            fetchPriority="high"
            decoding="async"
            alt="A creative computer workspace with gaming and software equipment"
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
