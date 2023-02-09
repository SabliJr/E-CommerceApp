import React from "react";
import "./AboutStyle.css";
import AppVideo from "../../Images/1.mp4";

//Components
import Features from "../../Components/Features/index";
import NewsLetter from "../../Components/NewsLetter/SignUp";

const AboutUs = () => {
  return (
    <>
      <div className='About_H'>
        <h1>#About_Us</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='About_T'>
        <h3>Who we are !?</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          voluptates nihil libero placeat rerum reiciendis soluta voluptatibus
          quam aperiam inventore at ex nam neque rem aliquid ipsa numquam earum
          maxime, facere id deleniti natus laborum quaerat?
          <br />
          <br />
          Enim, asperiores. Dicta amet iusto excepturi similique ducimus
          inventore quaerat id? Ut laboriosam quos, sunt quas mollitia
          aspernatur nihil dolore
          <br />
          <br />
          ullam magnam tempore quidem maxime nisi quia? Nisi tenetur placeat
          doloremque quos assumenda laudantium commodi facere id eligendi
          deserunt excepturi corporis modi, eaque, quibusdam et error quisquam.!
        </p>
      </div>
      <div className='About_v'>
        <h3>Download our app.</h3>
        <video loop autoPlay src={AppVideo}></video>
      </div>
      <Features />
      <NewsLetter />
    </>
  );
};

export default AboutUs;
