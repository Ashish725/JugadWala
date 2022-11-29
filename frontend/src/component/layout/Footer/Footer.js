import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
      
        <p>Download Our App </p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>JugadWala</h1>
        <p></p>

        <p>Copyrights 2022 &copy; JugadWala</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/ronnie0_27/">Instagram</a>
        <a href="https://www.linkedin.com/feed/">LinkdIn</a>
       
      </div>
    </footer>
  );
};

export default Footer;
