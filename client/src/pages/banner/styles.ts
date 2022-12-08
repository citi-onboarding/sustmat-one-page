import styled from "styled-components";
import { MouseVectorStart } from "../../assets";
import { MouseVectorEnd } from "../../assets";

export const BannerContainer = styled.div`
    background-color: #F7F7F7;
    margin: auto;
    max-width: 1440px;
    height: 636px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #SmallTitle{
        margin-top: 180px;
        font-family: 'Sen', sans-serif;
        font-size: 21.085px;
        color: #373737;
        margin-bottom: 34px;
    }

    #BigTitle{

        font-family: 'Sen';
        font-weight: 700;
        font-style: normal;
        font-size: 81px;
        line-height: 97.31%;
        z-index: 1;
        text-align: center;
        margin-top: 0px;
        margin-bottom: 0px;


        background: linear-gradient(288.52deg, #5191F1 40.92%, #7DDCF7 101.83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    #BlueDetails{
        z-index: 0;
        position: absolute;
        top: 318px;
        bottom: 133px;
    }
`;

export const ScrollContainer = styled.div`
    @keyframes Mouse{
        from {MouseVectorStart}
        to {MouseVectorEnd}
    }

    #MouseVector{
        animation-name: Mouse;
        animation-duration: 4s;
    }

    width: 202px;
    height: 62.50px;
    display: flex;
    flex-direction: row;
    margin-top: 152px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 27.45px;
    #RollPT{
        font-family: 'Sen';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #000000;
        opacity: 0.55;
    }
    #RollEN{
        font-family: 'Sen';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        opacity: 0.55;
    }
`