import React from "react";
import SocialNetwork from "./SocialNetwork";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__top">
          <h3>PRENEZ RENDEZ-VOUS</h3>
          <a
            href="tel:04 68 09 29 75"
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
              <span>
                Rond point les Espassoles,
                <br /> Rte de Perpignan Bâtiment B,
                <br /> 66300 Thuir
              </span>
            </div>
            <a
              className="access"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/search?q=kine%20thuir&oq=kine+thuir&aqs=chrome..69i57j0i20i263i512l2j46i175i199i512j0i512j0i22i30l5.1359j1j9&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZ5BjZOLRu9Yf-5b6lOjKXeiZyH2A:1665434794360&rflfq=1&num=10&rldimm=2157528383672936275&lqi=CgpraW5lIHRodWlyWhIiCmtpbmUgdGh1aXIqBAgDEACSAQ9waHlzaW90aGVyYXBpc3SaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTJkSFYxTmpCQlJSQUKqAQwQASoIIgRraW5lKAQ&ved=2ahUKEwj8v8GKxNb6AhVMgRoKHSdMCQ8QvS56BAgVEAE&sa=X&rlst=f#rlfi=hd:;si:2157528383672936275,l,CgpraW5lIHRodWlyWhIiCmtpbmUgdGh1aXIqBAgDEACSAQ9waHlzaW90aGVyYXBpc3SaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTJkSFYxTmpCQlJSQUKqAQwQASoIIgRraW5lKAQ;mv:[[42.684904499999995,2.8158738],[42.6139942,2.7461203000000003]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
            >
              <i className="fa-solid fa-location-dot"></i>
              <span>Plan d'accès</span>
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
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
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
