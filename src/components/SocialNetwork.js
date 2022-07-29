import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });
      link.addEventListener("mouseleave", (e) => {
        link.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul className="content content-row">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-socials"
          onMouseOver={anim}
        >
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-socials"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
        <a
          href="https://www.google.com/search?q=kin%C3%A9%20thuir&oq=kin%C3%A9+thuir&aqs=chrome..69i57j0i22i30l3j69i60l4.1800j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsbWZZaHjpp0dz8sJUP7Eupw39qNdA:1656665351499&rflfq=1&num=10&rldimm=2157528383672936275&lqi=CgtraW7DqSB0aHVpcloTIgtraW7DqSB0aHVpcioECAMQAJIBD3BoeXNpb3RoZXJhcGlzdJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOcE1rbDJVVEJSUlJBQqoBDRABKgkiBWtpbsOpKAQ&ved=2ahUKEwjgmqaup9f4AhXfgc4BHUaMC4cQvS56BAgLEAE&sa=X&rlst=f#rlfi=hd:;si:2157528383672936275,l,CgtraW7DqSB0aHVpcloTIgtraW7DqSB0aHVpcioECAMQAJIBD3BoeXNpb3RoZXJhcGlzdJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOcE1rbDJVVEJSUlJBQqoBDRABKgkiBWtpbsOpKAQ;mv:[[42.64279358323054,2.7789334883789696],[42.63636913198091,2.762840234289614]]"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-socials"
          onMouseOver={anim}
        >
          <li>
            <i class="fa-brands fa-google"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
