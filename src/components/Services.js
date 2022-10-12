import services from "../data/services.json";
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <ul>
      {services.map((service) => (
        <li>
          <NavLink to="/">
            <img src={service.picture} alt="onde de choc sur pied" />
            <h3>{service.picture}</h3>
            <span className="services__description">{service.description}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Services;
