import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";

const Navigation = () => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 20) {
        document
          .querySelector("#root > div > div > header.navigation")
          .classList.add("navigation--scrolled");
        document
          .querySelector("#root > div > div > header > div.social-network")
          .classList.add("social-network--scrolled");
        document
          .querySelector("#root > div > div > header > div.main-logo")
          .classList.add("main-logo--scrolled");
      } else {
        document
          .querySelector("#root > div > div > header.navigation")
          .classList.remove("navigation--scrolled");
        document
          .querySelector("#root > div > div > header > div.social-network")
          .classList.remove("social-network--scrolled");
        document
          .querySelector("#root > div > div > header > div.main-logo")
          .classList.remove("main-logo--scrolled");
      }
    });
  }, []);
  return (
    <header className="navigation">
      <SocialNetwork />
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Accueil</li>
        </NavLink>

        <NavLink
          to="/kine"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Kinésithérapie du sport</li>
        </NavLink>

        <NavLink
          to="/osteo"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Ostéopathie</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
      <div className="main-logo">
        <img src="./assets/img/logo.svg" alt="logo" />
      </div>
    </header>
  );
};

export default Navigation;
