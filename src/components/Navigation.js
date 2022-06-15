import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";

const Navigation = () => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 20) {
        document.querySelector(
          "#root > div > div > div.navigation"
        ).style.backgroundColor = "#191F22";

        console.log("test");
      } else {
        document.querySelector(
          "#root > div > div > div.navigation"
        ).style.backgroundColor = "transparent";
      }
    });
  });
  return (
    <div className="navigation">
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
    </div>
  );
};

export default Navigation;
