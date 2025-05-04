import React from 'react';
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <p className='breadcrums'>HOME | <span className='breadcrums__category'>SHOP</span></p>

      <section className='hero'>       
        <h1 className='hero__title'>DISCOVER OUR PRODUCTS</h1>
        <p className='hero__description'>Explore a wide range of premium products tailored to your lifestyle. Shop quality, style, and value — all in one place.</p>
      </section>
    </>
  );
}

export default Hero;