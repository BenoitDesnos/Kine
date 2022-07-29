import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";

const Navigation = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
    const menu = document.querySelector(".navigation > ul");
    const navLink = document.querySelectorAll(".hover");
    console.log(navLink);

    hamburger.addEventListener("click", () => {
      navigation.classList.toggle("navigation--clicked");
      menu.classList.toggle("menu--clicked");
      document.body.classList.toggle("noscroll");
      hamburger.classList.toggle("is-active");
    });
    navLink.forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.toggle("navigation--clicked");
        menu.classList.toggle("menu--clicked");
        document.body.classList.toggle("noscroll");
        hamburger.classList.toggle("is-active");
      });
    });

    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 20) {
        document
          .querySelector(".navigation")
          .classList.add("navigation--scrolled");
        document
          .querySelector(".social-network")
          .classList.add("social-network--scrolled");
        document
          .querySelector(".main-logo")
          .classList.add("main-logo--scrolled");
      } else {
        document
          .querySelector(".navigation")
          .classList.remove("navigation--scrolled");
        document
          .querySelector(".social-network")
          .classList.remove("social-network--scrolled");
        document
          .querySelector(".main-logo")
          .classList.remove("main-logo--scrolled");
      }
    });
  }, []);
  return (
    <header className="navigation">
      <div className="hamburger ">
        <span></span>
        <span></span>
        <span></span>
      </div>
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
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="main-logo">
        <img src="./assets/img/logo.svg" alt="logo" />
      </div>
    </header>
  );
};

export default Navigation;
