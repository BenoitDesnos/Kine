import React from "react";
import Navigation from "./../components/Navigation";
import { motion } from "framer-motion";

import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Pictures from "../data/pictures.json";
import { NavLink } from "react-router-dom";
import Article from "../components/Article";
import ScrollDown from "./../components/ScrollDown";
import staff from "../data/staff.json";

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [picturesArray, setPicturesArray] = useState([]);
  useEffect(() => {
    setPicturesArray(Pictures[0].pictures);
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <div>
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />

        <div className="home-main">
          <div className="title-container">
            <h1>TERRAMED</h1>
            <p className="under-title">"Terre de thérapie sportive"</p>
          </div>

          <NavLink to="/contact" className="more-button">
            <div className="button-container">
              <i className="fa-solid fa-phone"></i>
            </div>
            <span>Joignez-nous !</span>
          </NavLink>
          <ScrollDown />
        </div>
        <div className="about">
          <div className="about__presentation">
            <div className="about__presentation__img">
              <img src="./assets/img/bike.svg" alt="" />
            </div>
            <Article articleIndex="0" />
          </div>

          <Carrousel
            clickCount={clickCount}
            picturesArray={picturesArray}
            setClickCount={setClickCount}
          />

          <div className="about__team">
            <h2>Notre équipe.</h2>
            <div className="cards__container">
              {staff.map((employee) => (
                <div className="person__presentation" key={employee.id}>
                  <img
                    src={employee.picture}
                    alt={"Practicien" + employee.Name}
                  />
                  <h3>{employee.Name + " " + employee.Surname}</h3>
                  <span>{employee.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
