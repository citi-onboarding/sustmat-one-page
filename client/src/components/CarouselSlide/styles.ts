import styled from "styled-components";

export const VideoContainer = styled.div`
    border-radius: 50px;
    width: 100%;
    box-sizing: border-box;
    padding-right: 50px;
`;

export const SliderContainer = styled.div`
    width: 50%;
    .slick-prev{
        top: 104% !important;
        position: absolute;
        left: 42%;
        z-index: 10;
    }
    .slick-next{
        top: 104% !important;
        position: absolute;
        left: 55%;
        z-index: 10;
    }
    .slick-dots li.slick-active button:before{
        color: #6DC3F6;
        font-size: 9px !important;
    }
    .slick-dots li button:before{
        font-size: 9px;
    }
`;

export const DotsContainer = styled.div`
    position: relative;
`;