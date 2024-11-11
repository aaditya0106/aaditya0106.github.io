import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
//import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  //const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      {/* <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Aaditya Chopra")}
        </p>
      </div> */}
    </Fade>
  );
}
