import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: white;
    margin: auto;
    max-width: 1366px;
    height: 665px;
    position: relative;
    margin-top: 90px;


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #SmallTitle{
        margin-top: 180px;
        font-family: 'Sen', sans-serif;
        font-size: 21.085px;
        color: #373737;
        margin-bottom: 20px;
    }

    #BigTitle1{

        font-family: 'Sen';
        height: 80px;
        font-weight: 700;
        font-style: normal;
        font-size: 81px;
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

    #BigTitle2{
        font-family: 'Sen';
        font-weight: 700;
        font-style: normal;
        font-size: 81px;
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
        left: 9%;
        width: 84%;
        bottom: 133px;
    }
`;

export const ScrollContainer = styled.div`
    width: 202px;
    height: 62.50px;
    display: flex;
    flex-direction: row;
    margin-top: 140px;
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
        margin-bottom: 6px;
        margin-top: 0px;
    }
    #RollEN{
        font-family: 'Sen';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        opacity: 0.55;
        margin-top: 0px;
    }
`