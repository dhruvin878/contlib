import "./WhyChooseUs.css";

const features = [
  {
    icon: "✦",
    title: "Creative Thinking",
    desc: "Bold ideas rooted in strategy — never generic."
  },
  {
    icon: "◎",
    title: "Data Driven",
    desc: "Every decision backed by analytics and insight."
  },
  {
    icon: "◈",
    title: "ROI Focused",
    desc: "We measure what matters: growth and revenue."
  },
  {
    icon: "◆",
    title: "Premium Design",
    desc: "Visual excellence at every touchpoint."
  },
  {
    icon: "◉",
    title: "Dedicated Support",
    desc: "A responsive team committed to your success."
  },
  {
    icon: "◐",
    title: "Long-Term Partnership",
    desc: "We grow with you — not just for the launch."
  }
];

function WhyChooseUs() {
  return (
    <section className="why">

      <div className="why-container">

        <span className="why-tag">
          WHY CHOOSE US
        </span>

        <h2>
          What makes Contlib different.
        </h2>

        <div className="why-grid">

          {features.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;