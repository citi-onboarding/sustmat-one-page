import React from "react";
import { FooterContainer } from "./styles";
import { LogoSustMat } from "../../assets";

export const Footer: React.FC = () => {
    return(
        <FooterContainer>
            <div className="group43">
                <img src={LogoSustMat} alt="" />
            </div>
        </FooterContainer>
    );
}