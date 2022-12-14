import styled from "styled-components";


export const CarouselContainer = styled.div`
    max-width: 1366px;
    height: 633px;
    margin: auto;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`



export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Sen';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
    }

    p{
        width: 460px;
        height: 266px;
        font-family: 'Sen';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }

`

export const Button = styled.div`
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
`
export const ButtonText = styled.p`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    `