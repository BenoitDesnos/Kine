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
          href="https://www.google.com/search?q=kine%20thuir&oq=kine+thuir&aqs=chrome..69i57j0i20i263i512l2j46i175i199i512j0i512j0i22i30l5.1359j1j9&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZ5BjZOLRu9Yf-5b6lOjKXeiZyH2A:1665434794360&rflfq=1&num=10&rldimm=2157528383672936275&lqi=CgpraW5lIHRodWlyWhIiCmtpbmUgdGh1aXIqBAgDEACSAQ9waHlzaW90aGVyYXBpc3SaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTJkSFYxTmpCQlJSQUKqAQwQASoIIgRraW5lKAQ&ved=2ahUKEwj8v8GKxNb6AhVMgRoKHSdMCQ8QvS56BAgVEAE&sa=X&rlst=f#rlfi=hd:;si:2157528383672936275,l,CgpraW5lIHRodWlyWhIiCmtpbmUgdGh1aXIqBAgDEACSAQ9waHlzaW90aGVyYXBpc3SaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTJkSFYxTmpCQlJSQUKqAQwQASoIIgRraW5lKAQ;mv:[[42.684904499999995,2.8158738],[42.6139942,2.7461203000000003]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
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
