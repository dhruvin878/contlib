import "./Portfolio.css";

const projects = [
  {
    id: "01",
    title: "Luxe Interiors",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    id: "02",
    title: "Volt Energy",
    category: "Performance Marketing",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    id: "03",
    title: "Nova Fashion",
    category: "Creative Campaign",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: "04",
    title: "Urban Coffee",
    category: "Social Media Design",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
];

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">

      <p className="portfolio-tag">
        SELECTED WORK
      </p>

      <h2 className="portfolio-title">
        Work that delivers<br />
        real business results.
      </h2>

      <div className="portfolio-grid">

        {projects.map((item) => (
          <div className="portfolio-card" key={item.id}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="portfolio-overlay">
              <span>{item.id}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Portfolio;