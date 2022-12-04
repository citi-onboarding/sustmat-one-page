import React from "react";
import styled from 'styled-components';


export const CardContainer = styled.div`
    background-color: white;
    width: 335px;
    height: 221px;

    margin: 352px 65px 113px 0px;


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