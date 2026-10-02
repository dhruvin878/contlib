import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-brand">
          <div className="brand-icon">C</div>
          <span>CONTLIB</span>
        </div>

        <h1>
          Building Brands
          <br />
          <span>People Remember.</span>
        </h1>

        <p className="hero-services">
          Digital Marketing • Branding • Creative Strategy •
          Performance Marketing
        </p>

        <p className="hero-description">
          We help ambitious brands grow through strategic marketing,
          powerful storytelling and unforgettable digital experiences.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Portfolio
          </button>

          <button className="secondary-btn">
            Get In Touch
          </button>
        </div>

        <div className="scroll-indicator">
          DISCOVER OUR WORK ↓
        </div>

      </div>

    </section>
  );
}

export default Hero;