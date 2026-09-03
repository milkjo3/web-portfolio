import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-hero" id="about">
        <div className="about-hero-text">
          <h1>ABOUT ME</h1>
          <p>
            I’m a software engineer who enjoys solving difficult problems and
            turning thoughtful ideas into secure, reliable applications. I’m
            driven by curiosity, continuous growth, and the opportunity to build
            technology that makes a meaningful impact.
          </p>
        </div>
        <div className="about-hero-image">
          <img
            src={`${import.meta.env.BASE_URL}selfie.png`}
            alt="Portrait of Joseph Milliken"
          />
        </div>
      </div>

      <div className="about-content">
        <figure className="about-personal-photo">
          <img
            src={`${import.meta.env.BASE_URL}flower.jpeg`}
            alt="Green hydrangeas blooming among dense leaves"
          />
          <figcaption>
            Hydrangeas in bloom, photographed during my trip to Japan.
          </figcaption>
        </figure>

        <section className="about-story">
          <h2>MY STORY</h2>

          <p>
            I'm a Computer Science graduate with certificates in Cybersecurity
            and Secure Computing. I enjoy breaking down difficult problems,
            understanding how systems work, and turning ideas into reliable
            software. I'm especially motivated by projects that have a
            meaningful real-world purpose and help build a better future.
          </p>

          <p>
            As a teaching assistant for Algorithms and Principles of Programming
            Languages, I helped students work through challenging technical
            concepts and develop stronger problem-solving skills. The experience
            strengthened my ability to communicate clearly, collaborate
            patiently, and explain complex ideas from different perspectives.
          </p>
        </section>
        <figure className="about-personal-photo">
          <img
            src={`${import.meta.env.BASE_URL}/odawara.jpeg`}
            alt="A street in Odawara lined with signs, lanterns, and overhead wires"
          />
          <figcaption>
            Looking up while exploring the streets of Odawara, Japan.
          </figcaption>
        </figure>
        <aside className="about-personal">
          <h2>BEYOND CODE</h2>

          <p>
            Outside of development, I enjoy competitive and creative games, from{" "}
            <em>League of Legends</em> to <em>Super Mario 64</em>, as well as
            visually imaginative stories like <em>Arcane</em> and{" "}
            <em>One Piece</em>. I also enjoy hiking and photography, which give
            me opportunities to explore new places and capture details that
            might otherwise go unnoticed.
          </p>
        </aside>
      </div>
    </>
  );
}
