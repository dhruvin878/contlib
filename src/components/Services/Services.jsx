import { useEffect, useRef } from "react";
import serviceVideo1 from "../../assets/services/video-1.mp4";
import serviceVideo2 from "../../assets/services/video-2.mp4";
import serviceVideo3 from "../../assets/services/video-3.mp4";
import serviceVideo4 from "../../assets/services/video-4.mp4";
import serviceVideo5 from "../../assets/services/video-5.mp4";
import "./Services.css";

const services = [
  {
    title: "Social Media Marketing",
    tags: [
      "Instagram Marketing",
      "Facebook Marketing",
      "Content Strategy",
      "Reels",
      "Brand Growth",
      "Engagement",
    ],
    description:
      "Build a strong online presence through strategic content, audience engagement, and platform-focused social media campaigns.",
    type: "social-media",
    href: "pages/SocialMediaMarketing/SocialMediaMarketing.jsx",
    video: serviceVideo1,
  },

  {
    title: "Graphic Design",
    tags: [
      "Brand Identity",
      "Social Media Posts",
      "Logo Design",
      "Print Design",
      "Creative Assets",
      "UI Graphics",
    ],
    description:
      "Create visually stunning designs that strengthen your brand identity and leave a lasting impression on your audience.",
    type: "graphic-design",
    href: "#service-page/graphic-design",
    video: serviceVideo2,
  },

  {
    title: "Video Editing",
    tags: [
      "Reels",
      "Short Videos",
      "Motion Graphics",
      "Advertisements",
      "YouTube Content",
      "Promotional Videos",
    ],
    description:
      "Transform raw footage into engaging videos designed to capture attention, increase engagement, and drive conversions.",
    type: "video-editing",
    href: "#service-page/video-editing",
    video: serviceVideo3,
  },

  {
    title: "Website Design",
    tags: [
      "Responsive Design",
      "UI/UX",
      "Landing Pages",
      "Business Websites",
      "E-commerce",
      "Modern Interfaces",
    ],
    description:
      "Design modern, responsive, and conversion-focused websites that provide exceptional user experiences across all devices.",
    type: "website-design",
    href: "#service-page/website-design",
    video: serviceVideo4,
  },

  {
    title: "Performance Marketing",
    tags: [
      "Google Ads",
      "Meta Ads",
      "Lead Generation",
      "ROAS Optimization",
      "Analytics",
      "Conversion Tracking",
    ],
    description:
      "Drive measurable business growth with data-driven advertising campaigns focused on leads, sales, and return on investment.",
    type: "performance-marketing",
    href: "#service-page/performance-marketing",
    video: serviceVideo5,
  },

  {
    title: "Product Photography",
    tags: [
      "E-commerce",
      "Studio Shoots",
      "Lifestyle Photography",
      "Product Catalogs",
      "Amazon Listings",
      "Brand Content",
    ],
    description:
      "Showcase your products with professional photography that enhances brand value and increases customer trust.",
    type: "product-photography",
    href: "#service-page/product-photography",
    video: serviceVideo1,
  },

  {
    title: "Real Estate Photography",
    tags: [
      "Property Shoots",
      "Interior Photography",
      "Exterior Photography",
      "Drone Shots",
      "Luxury Properties",
      "Real Estate Marketing",
    ],
    description:
      "Capture properties with high-quality visuals that help real estate agents, builders, and developers attract more buyers.",
    type: "real-estate-photography",
    href: "#service-page/real-estate-photography",
    video: serviceVideo2,
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 58 58" aria-hidden="true" focusable="false">
      <path d="M8 50 50 8" />
      <path d="M16 8h34v34" />
    </svg>
  );
}

function CardVisual({ type, video, title }) {
  return (
    <div className={`vf-service-visual vf-service-visual--${type}`}>
      <video
        className="vf-service-video"
        src={video}
        aria-label={`${title} service video`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function Services() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || !cards.length || reducedMotion.matches) {
      return undefined;
    }

    let rafId = 0;

    const update = () => {
      rafId = 0;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
      const scrollRange = Math.max(rect.height - viewportHeight, 1);
      const sectionProgress = clamp(-rect.top / scrollRange, 0, 1);
      const timeline = sectionProgress * (cards.length - 1);

      cards.forEach((card, index) => {
        const relativeProgress = timeline - index;
        const enterProgress = clamp(relativeProgress + 1, 0, 1);
        const passedProgress = clamp(relativeProgress, 0, 1.45);
        const lowerTravel = viewportHeight * 0.82;
        const translateY =
          relativeProgress < 0
            ? (1 - enterProgress) * lowerTravel
            : -passedProgress * 74;
        const scale =
          relativeProgress < 0
            ? 0.965 + enterProgress * 0.035
            : 1 - passedProgress * 0.035;
        const rotate =
          relativeProgress < 0
            ? (1 - enterProgress) * 1.8
            : -passedProgress * 0.4;
        const isBeforeStack = relativeProgress < -0.98;
        const isPastStack = relativeProgress > 0.72;
        const isVisible = !isBeforeStack && !isPastStack;
        const fadeProgress = clamp(relativeProgress - 0.45, 0, 0.27) / 0.27;
        const opacity = isVisible ? 1 - fadeProgress : 0;

        card.style.transform = `translate3d(0, calc(-50% + ${translateY.toFixed(2)}px), 0) scale(${scale.toFixed(4)}) rotate(${rotate.toFixed(3)}deg)`;
        card.style.opacity = opacity.toFixed(3);
        card.style.visibility = opacity > 0.01 ? "visible" : "hidden";
        card.style.filter = "none";
        card.style.pointerEvents = relativeProgress > -0.08 && relativeProgress < 0.45 ? "auto" : "none";
      });
    };

    const requestUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section className="vf-kota-services" id="services" ref={sectionRef}>
      <div className="vf-services-stage">
        <div className="vf-services-shell">
          <div className="vf-services-grid" id="services-list">
            <article
              className="vf-service-card vf-service-card--intro"
              ref={(element) => {
                cardRefs.current[0] = element;
              }}
              style={{ "--vf-card-index": 0 }}
            >
              <div className="vf-service-intro-copy">
                <p className="vf-services-label">
                  <span />
                  Our Services
                </p>

                <h2 className="vf-service-intro-title" aria-label="Our Services">
                  <span>OUR</span>
                  <span>SERVICES</span>
                </h2>
              </div>

              <a className="vf-services-big-arrow" href="#services-list" aria-label="View services">
                <ArrowIcon />
              </a>
            </article>

            {services.map((service, index) => (
              <article
                className={`vf-service-card vf-service-card--${service.type}`}
                key={service.title}
                ref={(element) => {
                  cardRefs.current[index + 1] = element;
                }}
                style={{ "--vf-card-index": index + 1 }}
              >
                <div className="vf-service-card__copy">
                  <h3>{service.title}</h3>

                  <ul className="vf-service-tags" aria-label={`${service.title} features`}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <p>{service.description}</p>

                  <a className="vf-service-link" href={service.href}>
                    Find out more
                    <ArrowIcon className="vf-service-link__icon" />
                  </a>
                </div>

                <CardVisual type={service.type} video={service.video} title={service.title} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { services, Services };