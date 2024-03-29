import { NavLink } from "react-router-dom";

function Services({ services, children }) {
  return (
    <div className="services">
      {children}
      <ul className="services__container">
        {services.map((service) => (
          <li key={service.id}>
            <NavLink to="/" className="service">
              <div className="service__infos">
                <h3 className="service__title">{service.title}</h3>
                <span className="service__description">
                  {service.description}
                </span>
              </div>
              <div className="service__picture__container">
                <img
                  className="service__picture"
                  src={service.picture}
                  alt="onde de choc sur pied"
                />
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
