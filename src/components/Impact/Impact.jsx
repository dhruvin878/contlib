import "./Impact.css";

const Impact = () => {
  return (
    <section className="impact-section">

      <div className="impact-container">

        <span className="impact-tag">
          OUR IMPACT
        </span>

        <h2 className="impact-title">
          Results that speak for themselves.
        </h2>

        <div className="impact-stats">

          <div className="impact-card">
            <h3>100+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="impact-card">
            <h3>50+</h3>
            <p>Brands Built</p>
          </div>

          <div className="impact-card">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className="impact-card">
            <h3>300%</h3>
            <p>Average Growth</p>
          </div>

        </div>

        <div className="impact-results">

          <div className="result-card">
            <span>+280%</span>
            <p>
              Lead increase for Luxe Interiors
              in 90 days
            </p>
          </div>

          <div className="result-card">
            <span>2.4M</span>
            <p>
              Impressions generated for
              Volta Energy launch
            </p>
          </div>

          <div className="result-card">
            <span>4.2×</span>
            <p>
              Average ROAS across
              Google Ads accounts
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Impact;