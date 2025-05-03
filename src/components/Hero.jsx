import React from 'react';
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <p className='breadcrums'>HOME | <span className='breadcrums__category'>SHOP</span></p>

      <section className='hero'>       
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p className='hero__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur in amet fugiat quibusdam reprehenderit minus officiis dolorem voluptatum.</p>
      </section>
    </>
  )
}

export default Hero;