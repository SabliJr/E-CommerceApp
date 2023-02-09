import React from "react";
import "./NewsStyles.css";

import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const SignUp = () => {
  let date = new Date();
  let today = date.getFullYear();

  return (
    <section className='News_Section'>
      <article className='News_Ar'>
        <h5>Sign up to receive explosive discounts & new arrivals.</h5>
        <div className='Input_Div'>
          <input type='email' placeholder='Enter your email address' />
          <button type='submit'>Sign Up</button>
        </div>
      </article>
      <footer>
        <div className='Bottom'>
          <h3 className='Bottom_Logo'>
            <MdOutlineStoreMallDirectory />
            SabLi Store
          </h3>
          <p>&copy;SabliJr {today}</p>
        </div>
        <div className='Social_div'>
          <h3>Follow Us:</h3>
          <div className='Icons'>
            <BsFacebook />
            <SiInstagram />
            <FaPinterest />
            <FaTiktok />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default SignUp;
