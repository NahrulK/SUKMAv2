import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const style = { fontSize: "1.5em" };

  return (
    <>
      <div className="section__padding"></div>
      <footer className="sukmav2__footer">
        <div className="sukmav2__footer-left">
          <a href="#">
            <AiFillFacebook style={style} />
          </a>
          <a href="#">
            <AiFillInstagram style={style} />
          </a>
          <a href="#">
            <AiFillLinkedin style={style} />
          </a>
        </div>
        <div className="sukmav2__footer-center">
          <h1>SUKMAv2</h1>
        </div>
        <div className="sukmav2__footer-right">
          <p>© 2022 Nahrul K. All Rights Reserved. </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
