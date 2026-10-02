import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Luxe Interiors",
      review:
        "Contlib completely transformed our online presence. The quality of work exceeded every expectation.",
    },
    {
      name: "Michael Brown",
      company: "Volt Energy",
      review:
        "Professional, creative, and focused on results. We saw measurable growth within weeks.",
    },
    {
      name: "Emily Carter",
      company: "Nova Fashion",
      review:
        "The team delivered stunning visuals and a strategy that truly elevated our brand.",
    },
  ];

  return (
    <section className="testimonials">

      <div className="testimonials-container">

        <span className="testimonials-tag">
          TESTIMONIALS
        </span>

        <h2>
          What our clients say.
        </h2>

        <div className="testimonials-grid">

          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="stars">
                ★★★★★
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="client">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;