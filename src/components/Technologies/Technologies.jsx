import "./Technologies.css";
const logoFiles = [
  "python.svg",
  "docker.svg",
  "react.svg",
  "aws.svg",
  "github.svg",
  "cpp.svg",
  "js.svg",
  "mongodb.svg",
  "nodejs.svg",
  "express.svg",
];

const logos = logoFiles.map(
  (file) => `${import.meta.env.BASE_URL}logos/${file}`,
);

export default function Technologies() {
  return (
    <section className="technologies">
      <div className="technologies-text">
        <h2>TECHNOLOGIES</h2>
        <p>
          Technologies I've worked with to build scalable, high-performance
          applications.
        </p>
      </div>
      <div className="technologies-carousel">
        <div className="technologies-track">
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt="" className="tech-logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
