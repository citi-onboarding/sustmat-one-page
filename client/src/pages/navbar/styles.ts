import styled from 'styled-components'; 
import { useState } from 'react';
import { Navbar } from '.';

//implementar animação cores.
export const NavbarContainer = styled.div`
position: fixed;
z-index: 11;
max-width: 1366px;
height: 110px;
left: 0px;
margin: auto;
top: 0px;
filter: drop-shadow(0px -6px 25px rgba(0, 0, 0, 0.24));

background: #FFFFFF;
box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
right: 0%;
display: flex;
flex-direction: row;

button {
    background-color: transparent;
    border: transparent;
    cursor: pointer;
}

img {
    position: absolute;
    width: 107px;
    height: 84px;
    left: 8.4%;
    top: 16px;    
}

.blueteam {
    position: absolute;
    width: 80px;
    height: 25px;
    left: 80%;
    top: 43px;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    background: linear-gradient(280.74deg, #52A5E1 54.39%, #7EDAF6 138.84%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.Tteam {
    position: absolute;
    width: 80px;
    height: 25px;
    left: 80%;
    top: 43px;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    
    color: #222222;
}

.bluetech {
    position: absolute;
    width: 120px;
    height: 25px;
    left: 68.4%;
    top: 43px;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    background: linear-gradient(280.74deg, #52A5E1 54.39%, #7EDAF6 138.84%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.Ttechnology {
    position: absolute;
    width: 120px;
    height: 25px;
    left: 68.4%;
    top: 43px;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    
    color: #222222;
}

.blueadva {
    position: absolute;
    width: 120px;
    height: 25px;
    left: 56.2%;
    top: 43px;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    background: linear-gradient(280.74deg, #52A5E1 54.39%, #7EDAF6 138.84%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.Tadvantages {
    position: absolute;
    width: 120px;
    height: 25px;
    left: 56.2%;
    top: 43px;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    
    color: #222222;
}

.bluehome {
    position: absolute;
    width: 90px;
    height: 25px;
    left: 47.7%;
    top: 43px;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    background: linear-gradient(280.74deg, #52A5E1 54.39%, #7EDAF6 138.84%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.Thome {
    position: absolute;
    width: 90px;
    height: 25px;
    left: 47.7%;
    top: 43px;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #222222;
}

.contact {
    position: absolute;
    width: 138px;
    height: 42px;
    left: 87.4%;
    top: 34px;
}

.Tcontact {
    position: absolute;
    width: 78px;
    height: 25px;
    left: 28px;
    top: 9px;
    z-index: 10;
    
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;
    
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.17);

}

.group45 {
    position: absolute;
    width: 138px;
    height: 42px;
    left: 0px;
    top: 0px;
}

.bluerectangle150 {
    position: absolute;
    width: 138px;
    height: 42px;
    left: 0px;
    top: 0px;
    
    background: linear-gradient(11.36deg, #4688EA -32.18%, #73D5E5 201.12%);
    border-radius: 21px;
}

.rectangle150 {
    position: absolute;
    width: 138px;
    height: 42px;
    left: 0px;
    top: 0px;
    
    background: linear-gradient(278.87deg, #6AA5FE 27.2%, #73D5E5 111.13%);
    border-radius: 21px;
}

.rectangle2 {
    position: fixed;
    max-width: 100%;
    min-width: 1300px;
    height: 110px;
    left: 0%;
    margin-top: 200px;

    right: 0%;
    display: flex;
    flex-direction: row;
    
    background: #FFFFFF;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
}
`;