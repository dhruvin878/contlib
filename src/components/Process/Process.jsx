import "./Process.css";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    desc: "Deep-dive audit of your brand, market, and goals."
  },
  {
    number: "02",
    title: "Research",
    desc: "Competitor analysis, audience mapping, trends."
  },
  {
    number: "03",
    title: "Strategy",
    desc: "Tailored roadmap aligned to your KPIs."
  },
  {
    number: "04",
    title: "Design",
    desc: "Premium creative assets crafted with precision."
  },
  {
    number: "05",
    title: "Launch",
    desc: "Seamless multi-channel campaign deployment."
  },
  {
    number: "06",
    title: "Scale",
    desc: "Optimise, iterate, and compound your results."
  }
];

function Process() {
  return (
    <section className="process">

      <div className="process-container">

        <span className="process-tag">
          HOW WE WORK
        </span>

        <h2>
          Our proven process.
        </h2>

        <div className="timeline">

          <div className="timeline-line"></div>

          {processSteps.map((step, index) => (
            <div
              className={`step ${index === 2 ? "active" : ""}`}
              key={index}
            >
              <div className="step-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;