import styled from 'styled-components';

export const AdvantagesSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1440px;
    height: 657px;
    background-color: white;

`;

export const TitleSection = styled.h1`
    position: absolute;
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 40.8698px;
    line-height: 49px;
    text-align: right;
    color: #373737;
    margin: 116px 97px 445px 658px;
    
    #SustmatWord{
        background: linear-gradient(288.52deg, #5191F1 40.92%, #7DDCF7 101.83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;   
        font-weight: 700;
    }
`;


export const AdvantagesCardContainer = styled.div`
    margin-top: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .Cards{
        padding: 65px;
    }
`

export const ImageContainer = styled.div`
    width: 887px;
    height: 629px;
    position: absolute;

    #BackgroundImage{
        position: absolute;
    }
`;

