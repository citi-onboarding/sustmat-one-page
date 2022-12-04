import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: #F7F7F7;

    width: 1440px;
    height: 636px;
    top: 110px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p{
        font-family: 'Sen', sans-serif;
        font-size: 21.085px;
        color: #373737;
        margin-bottom: 34px;
    }

    h1{

        font-family: 'Sen';
        font-weight: 700;
        font-size: 81px;
        line-height: 97.31%;
        z-index: 1;


        background: linear-gradient(288.52deg, #5191F1 40.92%, #7DDCF7 101.83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    h2{
        z-index: 1;
        font-family: 'Sen';
        font-weight: 700;
        font-size: 81px;
        position: absolute;

        background: linear-gradient(288.52deg, #5191F1 40.92%, #7DDCF7 101.83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    #BlueDetails{
        z-index: 0;
    }
`;

export const ScrollContainer = styled.div`



`;