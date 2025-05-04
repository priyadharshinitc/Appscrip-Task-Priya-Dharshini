import React, { useState } from 'react';
import "../styles/Footer.css";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

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
        <p className='footer__header--desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorum!</p>
      </div>

      <div className='footer__newsLetter'>
        <input type="text" name="email" autoComplete='off' placeholder='Enter your e-mail...' />
        <button>SUBSCRIBE</button>
      </div>

      <div className='footer__contact'>
        <h3>CALL US</h3>
        <p>+44 221 133 5360 <GoDotFill /> customercare@elitemart.com</p>
      </div>

      <div className='footer__currency'>
        <h3>CURRENCY</h3>
        <div className='footer__currency__section'>
          <img src={usFlag} alt="US Flag" />
          <GoDotFill />
          <span>USD</span>
        </div>
      </div>

      <div>
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