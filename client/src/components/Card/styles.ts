import styled from "styled-components";

export const StyledCard = styled.div `
position: relative;
width: 315px;
height: 315px;
margin: 40px;
top: 202px;

button {
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-radius: 50%;
}

.knowmorebutton {
position: absolute;
z-index: 10;
left: 13.97%;
right: 14.29%;
top: 87.94%;
bottom: 0%;
}

.knowmoretext {
position: absolute;
z-index: 10;
left: 27.43%;
right: 27.43%;
margin-top: 9px;
width: 47%;

font-family: 'Sen', sans-seriff;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #FFFFFF;
}

.rectangle150 {
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: linear-gradient(278.87deg, #6AA5FE 27.2%, #73D5E5 111.13%);
border-radius: 52px;

&:hover {
    background: linear-gradient(47.06deg, #478DF7 -15.87%, #73D5E5 143.09%);
}
}

.group447 {
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 6.03%;

background: #FFFFFF;
box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.09);
border-radius: 11px;
}

.parttime {
position: absolute;
left: 18.73%;
right: 9.21%;
top: 45.7%;
bottom: 20.63%;

font-family: 'Sen', sans-seriff;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #373737;
}

.requirements {
position: absolute;
left: 18.73%;
right: 40.32%;
top: 33.02%;
bottom: 60.95%;

font-family: 'Sen', sans-seriff;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #6C6C6C;
}

.technician {
position: absolute;
left: 18.73%;
right: 23.81%;
top: 10.16%;
bottom: 74.6%;

font-family: 'Sen', sans-seriff;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

color: #373737;
}

.certinho {
position: absolute;
left: 6.35%;
right: 86.03%;
top: 48.57%;
bottom: 43.81%;
}

.certinho2 {
position: absolute;
left: 6.35%;
right: 86.03%;
top: 61.57%;
bottom: 43.81%;
}
`

export const Card = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.09);
    border-radius: 11px;
    width: 315px;
    height: 296px
`;

export const CardTitle = styled.h1`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #373737;
`;

export const RiquirementsText = styled.h3`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #6C6C6C;
`;

export const Image = styled.img``;

export const RequirementContainer = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
`;

export const RequirementText = styled.p`
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #373737;
    
`;