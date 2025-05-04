import React, { useState } from "react";
import "../styles/Navbar.css";

import { IoMenuOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

import EliteMartLogo from "../assets/Elite Mart Logo.jpg";

const Navbar = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  return (
    <>
      {showBanner && (
        <div className="offerBanner">
          <span>🎁 Sign up now and get 30% OFF on your first purchase!</span>
          <button
            className="offerBanner__closeBtn"
            onClick={() => setShowBanner(false)}
          >
            X
          </button>
        </div>
      )}

      <nav className="navBar">
        <div className="navBar__logo">
          <IoMenuOutline
            id="ioMenu"
            onClick={() => setShowSideNavbar((prev) => !prev)}
          />
          <img
            id="navBar__eliteMartLogo"
            src={EliteMartLogo}
            alt="Elite Mart Logo"
          />
        </div>

        <h1 id="title">Elite Mart</h1>

        <div className="navBar__icons">
          <IoIosSearch id="ioSearch" />
          <IoMdHeartEmpty id="ioHeart" />
          <IoCartOutline id="ioCart" />
          <CgProfile id="profile" />

          <div className="navBar__lang">
            <h4 className="navBar__lang__selection">ENG</h4>
            <IoIosArrowDown id="downArrow" />
          </div>
        </div>
      </nav>

      <section>
        <ul className="navBar__links">
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">SKILLS</a>
          </li>
          <li>
            <a href="#">STORIES</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </section>

      { (
        <div className={`sideNavbar ${showSideNavbar ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
          <button
            className="sideNavbar__closeBtn"
            onClick={() => setShowSideNavbar(false)}
          >
            X
          </button>
        </div>
      )}

      <hr />
    </>
  );
};

export default Navbar;