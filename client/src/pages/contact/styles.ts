import styled from "styled-components";

export const Container = styled.div`
    max-width: 975px;
    width: 80%;
    height: 489.06px;
    background: linear-gradient(300.49deg, #4080E0 43.53%, #71C8EC 117.57%);
    //filter: blur(2.60695px);
    border-radius: 8px;
    margin: auto;
    //padding-top: 41.71px;
    padding: 41.71px 40px 53.18px 52.38px ;
    box-sizing: border-box;
    display: flex;
    //justify-content: center;
    flex-direction: column;

    .ant-input{
        border-bottom: 1.04278px solid #FFFFFF;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
        background: none;
    }
`;

export const Title = styled.h1`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 700;
    font-size: 45.8824px;
    line-height: 55px;
    color: #FFFFFF;
`;

export const SendWord = styled.h3`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 700;
    font-size: 20.8556px;
    line-height: 25px;
    color: #FFFFFF;
`;

export const Image = styled.img`
`;

export const SendContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8.34px;
    align-self: flex-end;
    border-style: none;
    background: none;

    &:hover{
        cursor: pointer;
    } 
`;

export const InformationContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    gap: 33.37px;
`;