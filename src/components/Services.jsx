import "../styles/Services.css";
import { PROFILE, SERVICES } from "../data/profile";

export default function Services() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="services-heading" data-aos="fade-up">
          <h2 id="services-title">Services</h2>
          <p>{PROFILE.servicesLead}</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <article className="service-card" key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon"><i className={`bi ${service.icon}`}></i></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => <li key={point}><i className="bi bi-check2"></i>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
