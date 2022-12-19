import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, VideoContainer } from "./styles";


function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1.1,
      nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
      prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
      
    };
    return (
      <SliderContainer>
        <Slider {...settings}>
         <VideoContainer>
          <iframe width="100%" src="https://www.youtube.com/embed/aO2a3CcXU_Q" height='371px' title="YouTube video player" allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
         </VideoContainer>
         <VideoContainer>
          <iframe width="100%" src="https://www.youtube.com/embed/aO2a3CcXU_Q" height='371px' title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
         </VideoContainer>
         
        </Slider>
      </SliderContainer>
    );
  }
}