import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, VideoContainer } from "./styles";
import { arrowLeft, arrowRight } from "../../assets";


function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <img src={arrowRight} className={className} style={{...style}} onClick={onClick} alt="nextarrow"/>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <img src={arrowLeft} className={className} style={{...style}} onClick={onClick} alt="prevarrow"/>
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
      appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => (
        <div
        >
         {dots}
        </div>
      ),
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
         <iframe width="100%" height="371" src="https://www.youtube.com/embed/yMVO8eWadsc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
         </VideoContainer>
        </Slider>
      </SliderContainer>
    );
  }
}