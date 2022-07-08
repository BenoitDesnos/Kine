import React from "react";
import SocialNetwork from "./SocialNetwork";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__top">
          <h3>PRENEZ RENDEZ-VOUS</h3>
          <a
            href="04 68 09 29 75"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-socials"
          >
            <i className="fa-solid fa-phone"></i>
            04 68 09 29 75
          </a>
        </div>
        <div className="footer__bottom">
          <div className="footer__infos">
            <div className="schedule">
              <h3>Horaires : </h3>
              <ul>
                <li>Lundi au vendredi : 08h00 - 19h30</li>

                <li>Samedi : 09h00 - 11h00</li>
                <li>Dimanche : Fermé </li>
              </ul>
            </div>
            <div className="adress">
              <h3>TerraMed</h3>
              <p>
                Rond point les Espassoles,
                <br /> Rte de Perpignan Bâtiment B,
                <br /> 66300 Thuir
              </p>
            </div>
            <a
              className="access"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/dir/43.6007954,3.8757129/DUPIAT+Vincent,+DE+BEAULIEU+Marie,+VIDAL+Romain+KIN%C3%89+SPORT+PRO+Thuir,+Rond+point+les+Espassoles,+Rte+de+Perpignan+B%C3%A2timent+B,+66300+Thuir/@43.1204242,2.7701617,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x12b00d2cd0b1a63b:0x1df114a245a5e753!2m2!1d2.7685574!2d42.641856"
            >
              <i class="fa-solid fa-location-dot"></i>
              <p>Plan d'accès</p>
            </a>
            <div className="follow">
              <span>SUIVEZ-NOUS</span>
              <SocialNetwork />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/search?q=kin%C3%A9+thuir&tbm=lcl&sxsrf=ALiCzsacTHdXhHA4ClmeX0Zjgn67epLkOw%3A1656666619546&ei=-7m-YvrxIMGXlwTv2JnQCA&oq=kin%C3%A9+thuir&gs_l=psy-ab.3...0.0.0.4989192.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.QcrO_gCbXPE#lrd=0x12b00d2cd0b1a63b:0x1df114a245a5e753,1,,,&rlfi=hd:;si:2157528383672936275,l,CgtraW7DqSB0aHVpcloTIgtraW7DqSB0aHVpcioECAMQAJIBD3BoeXNpb3RoZXJhcGlzdJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOcE1rbDJVVEJSUlJBQqoBDRABKgkiBWtpbsOpKAQ;mv:[[42.6436743,2.8124807],[42.609732699999995,2.7463124]]"
                className="ratings"
              >
                <div className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span>AVIS CLIENTS</span>
              </a>
            </div>
          </div>
          <div className="mentions"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
