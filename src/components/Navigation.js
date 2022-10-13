import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.remove("noscroll");
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const handleShowLinks = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("noscroll");
  };

  return (
    <header
      className={`navigation ${
        isOpen
          ? "navigation--clicked"
          : isScrolled
          ? "navigation--scrolled"
          : null
      }`}
    >
      <div
        className={`hamburger ${isOpen ? "is-active" : null}`}
        onClick={handleShowLinks}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <SocialNetwork isScrolled={isScrolled} />
      <ul className={` ${isOpen ? "menu--clicked" : null}`}>
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
      <div
        className={isScrolled ? "main-logo main-logo--scrolled" : "main-logo"}
      >
        <img src="./assets/img/logo.svg" alt="logo" />
      </div>
    </header>
  );
};

export default Navigation;
