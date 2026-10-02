import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-container">

        <div className="contact-left">

          <span className="contact-tag">
            CONTACT US
          </span>

          <h2>
            Let's build
            <br />
            something amazing.
          </h2>

          <p>
            Ready to elevate your brand? Get in touch and
            let's discuss your next project.
          </p>

          <div className="contact-info">

            <div className="info-box">
              <span>Email</span>
              <h4>hello@contlib.com</h4>
            </div>

            <div className="info-box">
              <span>Phone</span>
              <h4>+91 98765 43210</h4>
            </div>

            <div className="info-box">
              <span>Location</span>
              <h4>Rajkot, Gujarat</h4>
            </div>

          </div>

        </div>

        <div className="contact-right">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Tell us about your project..."
              rows="6"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;