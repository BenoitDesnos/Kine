import React from "react";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";
import Article from "../components/Article";
import Banner from "../components/Banner";
import Services from "./../components/Services";
import servicesData from "../data/services.json";
import { motion } from "framer-motion";

const Kine = ({ variants }) => {
  const navigation = document.querySelector(".navigation");

  console.log(navigation);
  return (
    <motion.div
      className="kine"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <Navigation />
      <Banner>
        <img src="./assets/img/wave.svg" alt="" />
      </Banner>

      <div className="kine__articles">
        <Article articleIndex="1" />
      </div>
      <Services services={servicesData}>
        <h2 className="services__title">La kinésithérapie chez Terra-Med !</h2>
      </Services>

      <Footer />
    </motion.div>
  );
};

export default Kine;
