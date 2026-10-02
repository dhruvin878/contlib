import "./Photography.css";

const Photography = () => {
  const cards = [
    {
      title: "Product Photography",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    },
    {
      title: "Lifestyle Photography",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      title: "Commercial Photography",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
    {
      title: "Real Estate Photography",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
  ];

  return (
    <section className="photography-section">

      <div className="photography-container">

        <span className="photo-label">
          PHOTOGRAPHY
        </span>

        <h2 className="photo-title">
          Imagery that sells.
        </h2>

        <div className="photo-grid">
          {cards.map((card, index) => (
            <div
              className="photo-card"
              key={index}
            >
              <img
                src={card.image}
                alt={card.title}
              />

              <div className="photo-overlay">
                <span>{card.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="photo-cta">

          <p>
            Professional photography that converts
            browsers into buyers — from product
            flats to editorial campaigns.
          </p>

          <button>
            Book a Shoot
          </button>

        </div>

      </div>

    </section>
  );
};

export default Photography;