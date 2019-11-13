import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Carousel.css'

import FirstPhoto from '../../img/photo1.jpg'
import SecondPhoto from '../../img/photo2.jpg'
import ThirdPhoto from '../../img/photo3.jpg'

export default () => (
  <Carousel autoPlay>
    <div>
      <img src={FirstPhoto} alt=""/>  
    </div>
    <div>
      <img src={SecondPhoto} alt=""/>
    </div>
    <div>
      <img src={ThirdPhoto} alt=""/>
    </div>
  </Carousel>
);
