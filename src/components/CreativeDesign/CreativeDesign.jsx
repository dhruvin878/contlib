import "./CreativeDesign.css";

const CreativeDesign = () => {
  return (
    <section className="creative-design">
      <div className="creative-container">

        <div className="creative-top">
          <div className="creative-left">
            <span className="creative-tag">
              CREATIVE DESIGN
            </span>

            <h2>
              Visual work that
              <br />
              stops the scroll.
            </h2>
          </div>

          <div className="creative-right">
            <p>
              Branding, graphics, reels, motion graphics,
              carousel posts — every asset crafted to
              communicate your brand with clarity and
              premium aesthetic.
            </p>
          </div>
        </div>

        <div className="creative-grid">

          <div className="creative-card tall">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=""
            />
            <span>Branding</span>
          </div>

          <div className="creative-card">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5"
              alt=""
            />
            <span>Graphic Design</span>
          </div>

          <div className="creative-card">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
              alt=""
            />
            <span>Reels & Video</span>
          </div>

          <div className="creative-card tall">
            <img
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
              alt=""
            />
            <span>Motion Graphics</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CreativeDesign;