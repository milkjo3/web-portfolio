import "./Technologies.css";
import { Link } from "react-router-dom";
const logos = [
  "/logos/python.svg",
  "/logos/docker.svg",
  "/logos/react.svg",
  "/logos/aws.svg",
  "/logos/github.svg",
  "/logos/cpp.svg",
  "/logos/js.svg",
  "/logos/mongodb.svg",
  "/logos/nodejs.svg",
  "/logos/express.svg",
];

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
