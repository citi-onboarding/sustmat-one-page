import styled from "styled-components";


export const CarouselContainer = styled.div`
    ///max-width: 1366px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 88px;
    padding-left: 108px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 35%;
`

export const Button = styled.a`
    font-style: none;
    width: 178px;
    height: 34.91px;
    border-radius: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(278.87deg, #6AA5FE 27.2%, #73D5E5 111.13%);

    &:hover{
        background: linear-gradient(47.06deg, #478DF7 -15.87%, #73D5E5 143.09%);
        cursor: pointer;
    }
    margin-top: 24px;
    text-decoration: none;
`
export const ButtonText = styled.p`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    `

export const Img = styled.img``;

export const Title = styled.h1`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;

    color: #373737;
`;

export const Description = styled.p`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121.31%;
    /* or 19px */

    text-align: justify;

    color: #373737;
`;