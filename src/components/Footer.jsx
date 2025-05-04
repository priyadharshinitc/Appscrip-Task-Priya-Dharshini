import React, { useState } from 'react';
import "../styles/Footer.css";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import usFlag from "../assets/usFlag.png";
import googlePay from "../assets/googlePay.png";
import masterCard from "../assets/card.png";
import payPal from "../assets/paypal.png";
import amex from "../assets/amex.png";
import applePay from "../assets/applePay.png";
import payment from "../assets/payment.png";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(null);

  const accordionData = [
    {
      title: "ELITE MART",
      content: ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"]
    }, 
    {
      title: "QUICK LINKS",
      content: ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"]
    },
    {
      title: "FOLLOW US",
      content: ["Instagram", "LinkedIn"]
    }
  ];

  const toggleAccordion = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index) ? null : index);
  };

  return (
    <div className="footer">
      <div className='footer__header'>
        <h3 className='footer__header--title'>BE THE FIRST TO KNOW</h3>
        <p className='footer__header--desc'>Sign Up for updates from Elite Mart.</p>
      </div>

      <div className='footer__newsLetter'>
        <input type="text" name="email" autoComplete='off' placeholder='Enter your e-mail...' />
        <button>SUBSCRIBE</button>
      </div>

      <div className='footer__contact'>
        <h3>CONTACT US</h3>
        <p>+44 221 133 5360 <GoDotFill className='dotIcon' /> customercare@elitemart.com</p>
      </div>

      <div className='footer__currency'>
        <h3>CURRENCY</h3>
        <div className='footer__currency__section'>
          <img src={usFlag} alt="US Flag" />
          <GoDotFill />
          <span>USD</span>
        </div>
        <p className='footer__currency--desc'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
      </div>

      <hr id="footer__divider" />

      <div className='footer__linksMobileView'>
        {
          accordionData.map((item, i) => {
            return (
              <div key={i} className="accordion">
                <div className='accordion__title' onClick={() => toggleAccordion(i)}>
                  <h3>{item.title}</h3>
                  {isOpen === i ? <MdKeyboardArrowDown className="accordion__downArrow" /> : <MdKeyboardArrowRight className="accordion__rightArrow" />}
                </div>
                <ul className={`content ${isOpen === i ? "active" : ""}`}>
                  {isOpen === i && item.content.map((linkContent, index) => {
                    return <li key={index}><a href="#" className="links">{linkContent}</a></li>
                  })}
                </ul>
              </div>                  
            )
          })
        }
      </div>

      {/* <div className="footer__linksTabletView">
        {
          accordionData.map((item, i) => {
            return (
              <div key={i}>
                <h3>{item.title}</h3>
                  <ul>
                    {item.content.map((linkContent, index) => {
                      return <li key={index}>
                        <a href="#">{linkContent}</a>
                      </li>
                    })}
                    
                  </ul>
              </div>
            )
          })
        }
      </div> */}

      <div className="footer__eliteMartLinks footer__links">
        <h3 className='footer__links-title'>ELITE MART</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">Artisans</a>
          </li>
          <li>
            <a href="#">Boutiques</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">EU Compliances Docs</a>
          </li>
        </ul>
      </div>

      <div className="footer__quickLinks footer__links">
        <h3 className='footer__links-title'>QUICK LINKS</h3>
        <ul>
          <li>
            <a href="#">Orders & Shipping</a>
          </li>
          <li>
            <a href="#">Join/Login as a Seller</a>
          </li>
          <li>
            <a href="#">Payment & Pricing</a>
          </li>
          <li>
            <a href="#">Return & Refunds</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>

      <div className="footer__socialMediaLinks footer__links">
        <h3 className='footer__links-title'>FOLLOW US</h3>
        <ul>
          <li>
            <a href="#"><FaInstagram className='footer__linksIcon' /></a>
          </li>
          <li>
            <a href="#"><CiLinkedin className='footer__linksIcon' /></a>
          </li>
        </ul>
      </div>

      <div className="footer__paymentWays">
        <h3>ELITE MART ACCEPTS</h3>
        <div className='footer__paymentWays--icons'>
          <img src={googlePay} alt="GPay Icon" />
          <img src={masterCard} alt="Master Card Icon" />
          <img src={payPal} alt="Pay Pal Icon" />
          <img src={amex} alt="Amex Icon" />
          <img src={applePay} alt="Apple Pay Icon" />
          <img src={payment} alt="Cash Payment Icon" />
        </div>        
      </div>

      <p id="copyRight">Copyright &copy; 2025 Elite Mart. All rights reserved.</p>
    </div>
  )
}

export default Footer;