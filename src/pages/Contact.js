import React from "react";
import Navigation from "./../components/Navigation";
import ContactForm from "./../components/ContactForm";
import CopyToClipboard from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";
import Footer from "./../components/Footer";

const contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <main>
          <Navigation />
          <ContactForm />
          <div className="contact-infos">
            <div className="address">
              <div className="content">
                <h4>adresse</h4>
                <p>
                  Rond point les Espassoles,
                  <br /> Rte de Perpignan,
                  <br /> Bâtiment B
                </p>
                <p>66300 Thuïr</p>
              </div>
            </div>
            <div className="phone">
              <div className="content">
                <h4>téléphone</h4>
                <CopyToClipboard text="04 68 09 29 75" className="hover">
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("téléphone copié")}
                  >
                    {" "}
                    04 68 09 29 75
                  </p>
                </CopyToClipboard>
              </div>
            </div>
            <div className="email">
              <div className="content">
                <h4>email</h4>
                <CopyToClipboard
                  text="benoit.desnos66@gmail.com"
                  className="hover"
                >
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Email copié")}
                  >
                    {" "}
                    Terra-med@gmail.com
                  </p>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default contact;
