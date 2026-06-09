import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="about-hero-text">
          <h1>ABOUT ME</h1>
          <p>
            I'm a Computer Science graduate with a Cybersecurity and Secure
            Computing Certificate, passionate about building secure, reliable,
            and efficient technology solutions.
          </p>
        </div>
        <div className="about-hero-image"></div>
      </div>

      <div className="about-content">
        <div className="about-story">
          <h2>MY STORY</h2>
          <p>
            My background combines software development, algorithms, systems
            design, and cybersecurity. Through my degree and certificate
            program, I developed a strong foundation in problem solving, secure
            computing, and building technology with both functionality and
            reliability in mind.
          </p>
          <p>
            I also served as a Teaching Assistant for Algorithms and Principles
            of Programming Languages courses, where I mentored students in core
            computer science concepts, programming, and analytical problem
            solving. That experience strengthened my communication, leadership,
            and technical mentoring skills.
          </p>
          <p>
            I'm especially interested in software engineering, cybersecurity,
            cloud computing, and emerging technologies. I enjoy learning new
            tools, tackling complex technical challenges, and applying my skills
            to projects that are practical, secure, and impactful.
          </p>
        </div>
      </div>
    </>
  );
}
