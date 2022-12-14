import styled from 'styled-components';
import { backgroundimage } from '../../assets';

export const AdvantagesSectionContainer = styled.div`
    display: flex;
    margin: auto;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //max-width: 1366px;
    height: 657px;
    background-color: white;
    background-repeat: no repeat;
    background-image: url(${backgroundimage});
    background-size: 49% 86%;
    background-repeat: no-repeat;
    background-position: left bottom;
`;

export const TitleSection = styled.h1`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 40.8698px;
    line-height: 49px;
    text-align: right;
    color: #373737;
    margin: 95px 5% 84px 49%;
    white-space: nowrap;
    
    #SustmatWord{
        background: linear-gradient(288.52deg, #5191F1 40.92%, #7DDCF7 101.83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;   
        font-weight: 900;
    }
`;


export const AdvantagesCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const ImageContainer = styled.div`
    width: 887px;
    height: 629px;
    position: absolute;

    #BackgroundImage{
        position: absolute;
    }
`;

