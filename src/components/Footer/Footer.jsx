import "./Footer.css";
import { useState } from "react";

export default function Footer() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0b437fa1-42e7-4ff9-947a-c19f959adda9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setResult(
      data.success
        ? "Thanks, your message was received. I'll get back to you soon."
        : "Something went wrong. Please try again.",
    );
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <section className="left">
            <div className="left-top">
              <h3>JOSEPH MILLIKEN</h3>
              <p>
                New graduate software engineer focused on building clean,
                scalable applications. Open to full time opportunities. Based in
                Denver, open to relocation or remote.
              </p>
            </div>

            <div className="left-bottom">
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.github.com/milkjo3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/joseph-milliken/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV/Resume
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="right">
            <h3>GET IN TOUCH</h3>
            <hr />
            <form className="contact-form" id="contact" onSubmit={onSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <textarea name="message" placeholder="Message" required />
              <button type="submit">CONTACT ME</button>

              {result && <p className="form-status">{result}</p>}
            </form>
          </section>
        </div>
        <p className="copyright-text">
          © {new Date().getFullYear()} Joseph Milliken. Built with curiosity,
          creativity, and a love for code.
        </p>
      </div>
    </footer>
  );
}
