import { useState } from "react";
import "../styles/Journey.css";
import { JOURNEY_CONTENT, PROFILE } from "../data/profile";

export default function Journey() {
  const [activeTab, setActiveTab] = useState("education");
  const items = JOURNEY_CONTENT[activeTab];

  return (
    <section
      id="journey" className="journey-section"
      aria-labelledby="journey-title"
    >
      <div className="container">
        <div className="journey-heading" data-aos="fade-up">

          <h2 id="journey-title">
            Education & Experience
          </h2>

          <p>
            {PROFILE.journeyLead}
          </p>
        </div>

        <div
          className="journey-tabs"
          role="tablist"
          aria-label="Education and experience"
        >
          {["education", "experience"].map((tab) => (
            <button
              key={tab}
              id={`${tab}-tab`}
              className={`journey-tab ${activeTab === tab ? "active" : ""
                }`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`${tab}-panel`}
              onClick={() => setActiveTab(tab)}
            >
              <i
                className={`bi ${tab === "education"
                    ? "bi-mortarboard"
                    : "bi-briefcase"
                  }`}
                aria-hidden="true"
              />

              {tab === "education"
                ? "Education"
                : "Experience"}
            </button>
          ))}
        </div>

        <div
          id={`${activeTab}-panel`}
          className="journey-panel"
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
          key={activeTab}
        >
          {items.map((item) => (
            <article
              className="journey-card"
              key={item.title}
            >
              <div className="journey-icon">
                <i
                  className={`bi ${item.icon}`}
                  aria-hidden="true"
                />
              </div>

              <div className="journey-card-content">
                <span className="journey-period">
                  {item.period}
                </span>

                <h3>{item.title}</h3>

                <p className="journey-place">
                  {item.place}
                </p>

                <p>{item.description}</p>

                {item.projects && item.projects.length > 0 && (
                  <div className="journey-projects">
                    <h4>Project Contributions</h4>

                    {item.projects.map((project) => (
                      <div
                        className="journey-project"
                        key={project.name}
                      >
                        <span className="journey-project-dot" />

                        <div>
                          <h5>{project.name}</h5>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
