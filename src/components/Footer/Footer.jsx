import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>CONTLIB</h2>

            <p>
              We help ambitious brands grow through
              strategy, design, content, and digital
              experiences that deliver measurable results.
            </p>

          </div>

          <div className="footer-links">

            <div className="footer-column">

              <h4>Company</h4>

              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>

            </div>

            <div className="footer-column">

              <h4>Services</h4>

              <a href="/">Brand Strategy</a>
              <a href="/">Creative Design</a>
              <a href="/">Photography</a>
              <a href="/">Marketing</a>

            </div>

            <div className="footer-column">

              <h4>Social</h4>

              <a href="/">Instagram</a>
              <a href="/">LinkedIn</a>
              <a href="/">Behance</a>
              <a href="/">Dribbble</a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Contlib. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="/">Privacy Policy</a>

            <a href="/">Terms of Service</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;