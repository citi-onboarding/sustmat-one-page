import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, VideoContainer } from "./styles";
import { arrowLeft, arrowRight } from "../../assets";
import api from "../../services/api";


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

type CarouselData = {
  link: string;
}

export const SimpleSlider: React.FC = () => {
  
  const [data, setData] = useState<CarouselData[]>([]);
    
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
      }

      async function getData() {
        try {
            const response = await api.get(`/carousel`);
            setData(response.data);
            console.log("CARROSEL DADOS")
            console.log(data);
        } catch (error) {
          console.log('Error connecting to database')
        }
      }
    useEffect(() => {
        getData()
    }, [])

    return (
      <SliderContainer>
        <Slider {...settings}>
          {
            data.map(
            (video) => 
            <VideoContainer>
              <iframe width="100%" height="371" src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </VideoContainer>
          )
          }
        </Slider> 
      </SliderContainer>
    );
  }