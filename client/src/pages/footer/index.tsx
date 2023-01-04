import React from "react";
import { BottomContent, BottomFooter, FooterContact, FooterContainer, InfoContainer, LogoContainer, SocialMediaContainer, TopFooter } from "./styles";
import { LogoSustMat } from "../../assets";
import { YouTb } from "../../assets";
import { Face } from "../../assets";
import { Insta } from "../../assets";
import { CitiBranco } from "../../assets";
import { Heart } from "../../assets";
import { ContactUs } from "../../components/contact";

export const Footer: React.FC = () => {
    return(
        <FooterContact>
            <ContactUs />
            <FooterContainer id="Footer">
                <TopFooter>
                    <LogoContainer>
                        <img src={LogoSustMat} alt="" />
                    </LogoContainer>
                    <InfoContainer>
                            <h1 className="desc">We increase the revenue that can be invested in ESG actions, ecological closure of the area and in socio-environmental actions, without compromising profitability and investor returns.</h1>
                            <h1 className="sustgold">©2022 by SustGold.</h1>
                    </InfoContainer>
                    <SocialMediaContainer>
                        <img src={YouTb} alt="" />
                        <img src={Face} alt="" />
                        <img src={Insta} alt="" />
                    </SocialMediaContainer>
                </TopFooter>
                <BottomFooter>
                    <BottomContent>
                        Made with &lt;/&gt; and <img src={Heart} alt="" /> by  <img src={CitiBranco} alt="" /> 
                    </BottomContent>
            </BottomFooter>
            </FooterContainer>
        </FooterContact>
    
    );
}