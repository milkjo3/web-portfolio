import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import { Link } from "react-router-dom";
const projectOne = {
  title: "breve",
  description:
    "URL shortener that turns long links into short, shareable ones with built-in analytics.",
  image:
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const projectTwo = {
  title: "CLARA",
  description:
    "AI-based second opinion tool for pathologists to make better, more accurate clinical decisions.",
  image:
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const projectThree = {
  title: "Transferr",
  description:
    "A peer-to-peer, multi-threaded file transfer system is designed to enable fast, scalable, and resilient data exchange directly between users without relying on a central server. ",
  image:
    "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function Projects() {
  return (
    <>
      <div className="projects" id="projects">
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
