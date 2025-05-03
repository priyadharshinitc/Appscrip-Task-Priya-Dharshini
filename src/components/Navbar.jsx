import React, { useState } from 'react';
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

  if(!showBanner) return null;

  return (
    <>
      <div className="offerBanner">
        <span>🎁 Sign up now and get 30% OFF on your first purchase!</span>
        <button className="offerBanner__closeBtn" onClick={() => setShowBanner(false)}>X</button>
      </div>

      <nav className='navBar'>
        <div className='navBar__logo'>
          <IoMenuOutline id="ioMenu" />
          <img id="navBar__eliteMartLogo" src={EliteMartLogo} alt="Elite Mart Logo" />
        </div>
        
        <h1 id="title">Elite Mart</h1>

        <div className='navBar__icons'>
          <IoIosSearch id="ioSearch" />
          <IoMdHeartEmpty id="ioHeart" />
          <IoCartOutline id="ioCart" />
          <CgProfile id="profile" />
          
          <div className='navBar__lang'>
            <h4 className='navBar__lang__selection'>ENG</h4>
            <IoIosArrowDown id="downArrow" />
          </div>
        </div>
      </nav>

      <section>
        <ul className='navBar__links'>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </section>

      <hr />
    </>
  )
}

export default Navbar;