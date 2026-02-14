// src/components/Footer/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <section className="left">
            <div className="left-top">
                <h3>Joseph Milliken</h3>
                <p>New graduate software engineer focused on building clean, scalable applications. Open to full time opportunities. Based in Denver, open to relocation or remote.</p>
            </div>

            <div className='left-bottom'>
            <p>Python · React · PostgreSQL · AWS</p>
            <ul className="list-unstyled">
                <li><a 
                    href="https://www.github.com/milkjo3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a></li>
                <li><a 
                    href="https://www.linkedin.com/in/joseph-milliken/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a></li>
                <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">CV/Resume</a></li>
              </ul>

            </div>

          </section>

          <section className="right">
            <h3>Get in touch</h3>
            <hr />
            <form className="contact-form">
                <input type="email" placeholder="Enter email" />
                <textarea placeholder="Message" />
                <button type="button">Send</button>
            </form>
          </section>

        </div>
      </div>
    </footer>
  );
}
