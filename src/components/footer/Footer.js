import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* Circular photo */}
        <img
          src={process.env.PUBLIC_URL + "/images/siva.jpg"}
          alt="Sivanesan Ashokkumar"
          className="footer-image"
        />

        {/* Thank you text */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Thanks for visiting ❤️ – your support means everything!")}
        </p>

        {/* Your name */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by Sivanesan Ashokkumar
        </p>
      </div>
    </Fade>
  );
}
