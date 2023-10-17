import React from "react";
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Squid letterpress neutra pork belly beard schlitz sartorial copper
            mug kogi tofu mumblecore flannel vaporware. Keffiyeh single-origin
            coffee meh, try-hard fit kickstarter marfa tilde. Sus kogi mukbang
            cold-pressed fam shoreditch. Bushwick paleo kitsch salvia etsy
            authentic gluten-free DIY neutra roof party four dollar toast deep
            v. Palo santo plaid snackwave, fingerstache solarpunk fanny pack
            vinyl schlitz edison bulb try-hard.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className="img"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
