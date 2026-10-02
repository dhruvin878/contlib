import "./BrandStrategy.css";

function BrandStrategy() {
  return (
    <section className="brand">

      <div className="brand-container">

        {/* LEFT */}

        <div className="brand-left">

          <span className="brand-tag">
            BRAND STRATEGY
          </span>

          <h2>
            We don't just design.
            <br />
            <span>We position.</span>
          </h2>

          <div className="brand-line"></div>

          <p>
            Your brand is more than a logo. It's the feeling your audience
            has when they interact with you at every touchpoint —
            digital or physical.
          </p>

          <div className="brand-steps">

            <div className="brand-step">
              <span>1</span>
              <h4>Brand Audit & Research</h4>
            </div>

            <div className="brand-step">
              <span>2</span>
              <h4>Positioning & Messaging</h4>
            </div>

            <div className="brand-step">
              <span>3</span>
              <h4>Visual Identity System</h4>
            </div>

            <div className="brand-step">
              <span>4</span>
              <h4>Brand Guidelines & Rollout</h4>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="brand-right">

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>

          <div className="brand-core">
            <h3>BRAND</h3>
            <p>Core Identity</p>
          </div>

          <div className="floating-item top">
            Logo
          </div>

          <div className="floating-item right-top">
            Voice
          </div>

          <div className="floating-item right-bottom">
            Colors
          </div>

          <div className="floating-item bottom">
            Values
          </div>

          <div className="floating-item left-bottom">
            Story
          </div>

          <div className="floating-item left-top">
            Audience
          </div>

        </div>

      </div>

    </section>
  );
}

export default BrandStrategy;