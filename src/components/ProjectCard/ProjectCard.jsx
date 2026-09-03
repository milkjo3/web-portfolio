export default function ProjectCard({
  className = "",
  title,
  description,
  image,
  technologies = [],
}) {
  return (
    <>
      <article className={`project-card ${className}`}>
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>

        <div className="project-card-text">
          <div className="project-card-summary">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          {technologies.length > 0 && (
            <ul
              className="project-technologies"
              aria-label={`${title} technologies`}
            >
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </>
  );
}
