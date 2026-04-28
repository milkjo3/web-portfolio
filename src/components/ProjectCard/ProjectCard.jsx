import { Link } from "react-router-dom";

export default function ProjectCard({
  className = "",
  title,
  description,
  image,
}) {
  return (
    <>
      <article className={`project-card ${className}`}>
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>

        <div className="project-card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
}
