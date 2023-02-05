import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./../../index.css";

const MenuLinks = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#category">Category</a>
    </p>
    <p>
      <a href="#profile">Profile</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sukmav2__navbar">
      <div className="sukmav2__navbar-links">
        <div className="sukmav2__navbar-links_logo">
          <h1>SUKMAv2</h1>
        </div>
        <div className="sukmav2__navbar-links_container">
          <MenuLinks />
        </div>
      </div>
      <div className="sukmav2__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="sukmav2__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}

        {toggleMenu && (
          <div className="sukmav2__navbar-menu_container scale-up-center">
            <div className="sukmav2__navbar-menu_container-links">
              <MenuLinks />
              <div className="sukmav2__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
