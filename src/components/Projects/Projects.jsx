import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

const claraProject = {
  title: "CLARA",
  description:
    "AI-based second opinion tool for pathologists to make better, more accurate clinical decisions. Project won 1st Place among Computer Science teams at the College of Engineering Senior Capstone Expo",
  image: `${import.meta.env.BASE_URL}/CLARA.png`,
  technologies: ["Python", "React.js", "MongoDB", "Node.js", "AWS S3"],
};

const transferrProject = {
  title: "transferr",
  description:
    "A peer-to-peer file transfer system is designed to enable fast, scalable, and resilient data exchange directly between users without relying on a central server. ",
  image: `${import.meta.env.BASE_URL}/transferr.png`,
  technologies: ["C#", "Avalonia UI", "TCP/IP"],
};

export default function Projects() {
  const projectsGridRef = useRef(null);
  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    const projectsGrid = projectsGridRef.current;

    if (!projectsGrid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(projectsGrid);

    return () => observer.disconnect();
  }, []);

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
      <div
        ref={projectsGridRef}
        className={`projects-grid ${
          projectsVisible ? "projects-grid--visible" : ""
        }`}
      >
        <ProjectCard className="project-card--featured" {...claraProject} />
        <ProjectCard className="project-card--side" {...transferrProject} />
      </div>
    </>
  );
}
