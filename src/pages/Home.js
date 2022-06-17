import React from "react";
import Navigation from "./../components/Navigation";
import { motion } from "framer-motion";

import Carroussel from "../components/Carroussel";

const Home = () => {
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
          <section id="section10" className="demo">
            <a href="#about" id="about">
              <span></span>Scroll
            </a>
          </section>
        </div>
        <div className="about">
          <div className="about__presentation">
            <div className="about__presentation__img">
              <img src="./assets/img/bike.svg" alt="" />
            </div>
            <div className="about__text">
              <h2>
                W.E.L.L / Cabinet de kinésithérapie à Thuïr, pyrénnées
                orientales.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                maxime, asperiores alias voluptates sunt distinctio. Eius id
                cupiditate numquam voluptas, deserunt quae repellat nostrum
                officiis nemo omnis. Reiciendis laudantium consectetur eos
                error, ipsam nesciunt perspiciatis pariatur commodi iste veniam
                alias aut fugit assumenda corporis voluptates dignissimos
                veritatis, <strong>doloremque</strong> tenetur necessitatibus
                incidunt voluptas consequatur adipisci? Accusantium repudiandae
                voluptatum corporis exercitationem neque unde ipsa porro
                distinctio harum? Officia explicabo amet cupiditate voluptatem.
                Reprehenderit, rerum tenetur minima odio sint, sequi at
                perferendis voluptas numquam sapiente magni accusantium ut,
                alias non nam ipsa nulla praesentium ratione impedit consequatur{" "}
                <strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, nobis.
                </strong>{" "}
                ducimus rem. Reprehenderit ducimus recusandae nemo quam, ea
                repellendus quisquam cupiditate officiis fugiat atque harum
                culpa voluptatem qui pariatur adipisci facere aliquid
                necessitatibus commodi laudantium eligendi tenetur quidem veniam
                modi? Sint facilis mollitia facere dolore adipisci quibusdam
                quisquam, doloremque eligendi temporibus inventore quidem
                suscipit. Magni molestiae eos maxime animi! Dicta magnam
                perspiciatis fugiat ex corrupti totam soluta debitis voluptates
                quis eligendi. Expedita corporis quia quisquam iste, illum porro
                placeat, ex natus ipsam voluptatibus illo! Aspernatur distinctio
                fugiat velit ad quos ducimus vitae eum ipsum voluptatum fugit
                non porro, obcaecati modi nesciunt. Molestias libero illum
                deserunt dolores, rem nam voluptate quas explicabo possimus nisi
                dolorum totam labore impedit natus quo quis a veniam corporis
                quibusdam! Mollitia aperiam, necessitatibus, consequatur tempore
                reprehenderit alias vero est voluptatem non animi quisquam.
                Nihil, nesciunt? Doloremque similique eos quibusdam nihil
                laboriosam, enim eum beatae quisquam odio aliquam nulla.
                Cupiditate, ipsa qui amet ipsum sit pariatur. Quis repellat odit
                architecto assumenda, ut exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Accusantium ducimus
                voluptatibus aperiam nam maiores iure,{" "}
                <strong>
                  qui eius temporibus sapiente necessitatibus deleniti
                  repellendus consectetur placeat.
                </strong>
              </p>
            </div>
          </div>
          <div className="about__carroussel">
            <Carroussel />
          </div>

          <div className="about__team">
            <div className="person__presentation">
              <img src="./assets/img/person1.jpg" alt="employee" />
              <h3>Nom Prénom</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                quod impedit ipsam quam, accusamus illum asperiores quis aliquam
                ipsum natus praesentium dolorem exercitationem ab neque!
              </p>
            </div>
            <div className="person__presentation">
              <img src="./assets/img/person2.jpg" alt="employee" />
              <h3>Nom Prénom</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                quod impedit ipsam quam, accusamus illum asperiores quis aliquam
                ipsum natus praesentium dolorem exercitationem ab neque!
              </p>
            </div>
            <div className="person__presentation">
              <img src="./assets/img/person3.jpg" alt="employee" />
              <h3>Nom Prénom</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                quod impedit ipsam quam, accusamus illum asperiores quis aliquam
                ipsum natus praesentium dolorem exercitationem ab neque!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
