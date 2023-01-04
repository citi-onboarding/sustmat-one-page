import styled from "styled-components";

export const ButtonContainer = styled.button`
    background: linear-gradient(278.87deg, #6AA5FE 27.2%, #73D5E5 111.13%);
    border-radius: 52px;
    text-decoration: none;
    height: 38px;
    //width: 226px;
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background: linear-gradient(47.06deg, #478DF7 -15.87%, #73D5E5 143.09%);
        cursor: pointer;
    }
`;

export const ButtonTitle = styled.h3`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #FFFFFF;
`;