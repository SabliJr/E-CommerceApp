import React from "react";
import "./FeaturesStyle.css";

//Images
import Shipping from "../../Images/f1.png";
import Online from "../../Images/f2.png";
import Save from "../../Images/f3.png";
import Promotions from "../../Images/f4.png";
import Happy from "../../Images/f5.png";
import Support from "../../Images/f6.png";

const index = () => {
  return (
    <article className='features_ar'>
      <div className='features_div'>
        <img src={Shipping} alt='' />
        <p className='shipping'>Free Shipping</p>
      </div>
      <div className='features_div'>
        <img src={Online} alt='' />
        <p className='online'>Online Order</p>
      </div>
      <div className='features_div'>
        <img src={Save} alt='' />
        <p className='save'>Save Money</p>
      </div>
      <div className='features_div'>
        <img src={Promotions} alt='' />
        <p className='promotion'>Promotions</p>
      </div>
      <div className='features_div'>
        <img src={Happy} alt='' />
        <p className='happy'>Happy Sell</p>
      </div>
      <div className='features_div'>
        <img src={Support} alt='' />
        <p className='support'>F24/7 Support</p>
      </div>
    </article>
  );
};

export default index;
