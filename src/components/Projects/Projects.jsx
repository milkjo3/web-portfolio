import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import { Link } from "react-router-dom";
const projectOne = {
  title: "breve",
  description:
    "URL shortener that turns long links into short, shareable ones with built-in analytics.",
  image: "",
};

const projectTwo = {
  title: "CLARA",
  description:
    "AI-based second opinion tool for pathologists to make better, more accurate clinical decisions.",
  image: "",
};

const projectThree = {
  title: "Transferr",
  description:
    "A peer-to-peer, multi-threaded file transfer system is designed to enable fast, scalable, and resilient data exchange directly between users without relying on a central server. ",
  image: "",
};

export default function Projects() {
  return (
    <>
      <div className="projects">
        <div className="projects-text">
          <h2>PROJECTS</h2>
          <p>
            A selection of projects focused on scalable architecture, clean UI,
            and real-world problem solving.
          </p>
        </div>
      </div>
      <div className="projects-grid">
        <ProjectCard className="span-1" {...projectOne} />
        <ProjectCard className="span-2" {...projectTwo} />
        <ProjectCard className="span-3" {...projectThree} />
      </div>
    </>
  );
}
