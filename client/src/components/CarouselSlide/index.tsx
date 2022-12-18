import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{width: '50%'}}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img
              style={{
                width: '200px'
              }}
              src="https://cdn.esawebb.org/archives/images/screen/potm2209a.jpg" alt="" 
            />
          </div> 
          <div>
            <img
              style={{
                width: '200px'
              }}
              src="https://cdn.esawebb.org/archives/images/screen/potm2209a.jpg" alt="" 
            />
          </div>
        </Slider>
      </div>
    );
  }
}