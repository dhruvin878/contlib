import "./FAQ.css";
import { useState } from "react";

function FAQ() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "What services does Contlib offer?",
      answer:
        "We provide branding, website design, social media management, photography, content creation, digital marketing, and growth strategy services."
    },
    {
      question: "How long does a project take?",
      answer:
        "Most projects take between 2 to 8 weeks depending on complexity, deliverables, and client feedback cycles."
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes. We work with startups, growing businesses, and established brands looking to improve their digital presence."
    },
    {
      question: "Do you offer monthly retainers?",
      answer:
        "Absolutely. We provide flexible monthly plans for marketing, content creation, and ongoing design support."
    },
    {
      question: "How do we get started?",
      answer:
        "Simply contact us through the website. We'll schedule a discovery call to understand your goals and create a custom strategy."
    }
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="faq-container">

        <span className="faq-tag">
          FAQ
        </span>

        <h2>
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="faq-list">

          {faqs.map((item, index) => (
            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >

              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>

                <span>
                  {active === index ? "−" : "+"}
                </span>
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;