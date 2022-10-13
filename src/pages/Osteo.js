import React from "react";
import Navigation from "./../components/Navigation";
import Banner from "./../components/Banner";
import Article from "./../components/Article";
import Footer from "../components/Footer";
import Services from "./../components/Services";
import servicesData from "../data/services.json";
import { motion } from "framer-motion";
const Osteo = ({ variants }) => {
  return (
    <motion.div
      className="osteo"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <Navigation />
      <Banner>
        <img src="./assets/img/wave2.svg" alt="" />
      </Banner>
      <div className="osteo__articles">
        <Article articleIndex="2" />
      </div>

      <Services services={servicesData}>
        <h2 className="services__title">Les services d'osthéopathie</h2>
      </Services>
      <Footer />
    </motion.div>
  );
};

export default Osteo;
