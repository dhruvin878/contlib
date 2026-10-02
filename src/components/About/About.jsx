import "./About.css";
const aboutImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-left">

          <span className="about-tag">
            WHO WE ARE
          </span>

          <h2>
            A creative agency
            <br />
            built on results.
          </h2>

          <div className="about-line"></div>

          <p>
            Contlib is a creative digital marketing and branding agency helping
            businesses grow through strategy, creativity, and measurable
            performance.
          </p>

          <p>
            We combine branding, content creation, paid advertising,
            social media management, and visual storytelling to build
            memorable brands and generate sustainable business growth.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <div className="card-icon">🎯</div>

              <h3>Mission</h3>

              <p>
                Empower brands to lead their markets through creative excellence.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">◎</div>

              <h3>Vision</h3>

              <p>
                To be the most trusted creative partner for ambitious companies.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">✦</div>

              <h3>Values</h3>

              <p>
                Integrity, creativity, results, and long-term partnerships.
              </p>
            </div>

          </div>

        </div>

        <div className="about-right">

          <img
            src={aboutImage}
            alt="About Contlib"
            className="about-image"
          />

          <div className="experience-card">
            <h3>5+</h3>
            <span>Years of Excellence</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;