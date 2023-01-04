import styled from "styled-components";

export const FooterContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: #1C1C1C;
    //display: flex;
    //flex-direction: column;
    margin-top: 626px;
    
    .sustgold {
        font-family: 'Rubik', sans-seriff;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 36px;
        color: #FFFFFF;
        opacity: 0.48;
    }

    .desc {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #FFFFFF;
    } 
`

export const LogoContainer = styled.div`
    //margin-right: 2.84%;
    width: 150px;
`;

export const InfoContainer = styled.div`
    width: 90%;
    max-width: 568px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 12%;
`;

export const TopFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 353px;
    //margin-right: 30%;
`;

export const BottomFooter = styled.div`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    background-color: #6BA6FF;

    //margin: auto;
    height: 62px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
`;

export const BottomContent = styled.p`
    justify-self: flex-end;
    margin-left: 70%;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 25px;
    justify-self: flex-end;
`;

export const FooterContact = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  //  border: 2px solid red;
`;

export const RightContent = styled.div`
    display: flex;
    gap: 40px;
   // border: 2px solid blue;
`;

export const LogoImg = styled.img`
    width: 100%;
`;