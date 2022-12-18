import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VideoContainer } from "./styles";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{width: '50%'}}>
        <Slider {...settings}>
          <VideoContainer>
            <video src="https://www.youtube.com/watch?v=YOMk5yMpga0"></video>
          </VideoContainer>
          <VideoContainer>
            <video src="https://www.youtube.com/watch?v=YOMk5yMpga0"></video>
          </VideoContainer>
        </Slider>
      </div>
    );
  }
}