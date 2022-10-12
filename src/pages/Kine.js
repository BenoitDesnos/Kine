import React from "react";
import Navigation from "./../components/Navigation";

import Footer from "./../components/Footer";
import Article from "../components/Article";
import Banner from "../components/Banner";
import Services from "./../components/Services";

const Kine = () => {
  return (
    <>
      <Navigation />
      <Banner />

      <div className="kine__articles">
        <Article articleIndex="1" />
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default Kine;
