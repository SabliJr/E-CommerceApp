import React from "react";
import { Link } from "react-scroll";
import "./HeroStyle.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='heroText'>
          <h4>Up coming season</h4>
          <h1>
            Comfy stylish & modern design
            <br />
            summer collection
          </h1>
          <h5>Save more with coupons & up to 70% off.</h5>
          <button>
            <Link
              to='shopping_section'
              spy={true}
              smooth={true}
              duration={500}
              offset={-150}>
              Shop Now
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
