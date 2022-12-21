import styled from 'styled-components';


export const CardContainer = styled.div`
    background-color: white;
    box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.09);
    width: 24.5%;
    height: 221px;
    margin: 32.5px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CardTitle = styled.h1`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #373737;
    text-align: center;
    margin-top: 71px;
    margin-bottom: 0px;
`;

export const CardDescription = styled.p`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #373737;
    text-align: center;
    margin-top: 16px;
`;

export const Buttom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.8s;
    width: 16.6%;
    height: 38px;
    border-radius: 52px;
    background: linear-gradient(278.87deg, #6AA5FE 27.2%, #73D5E5 111.13%);
    position: absolute;
    margin-top: 200px;

    &:hover{
        background: linear-gradient(47.06deg, #478DF7 -15.87%, #73D5E5 143.09%);
        cursor: pointer;
    }
`;

export const IconContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    margin-top: -25px;
    display:flex;
    justify-content: center;
    align-items: center;

`;

export const ButtomText = styled.p`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
`;