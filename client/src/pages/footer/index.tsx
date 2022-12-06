import React from "react";
import { FooterContainer } from "./styles";
import { LogoSustMat } from "../../assets";
import { YouTb } from "../../assets";
import { Face } from "../../assets";
import { Insta } from "../../assets";
import { CitiBranco } from "../../assets";
import { Heart } from "../../assets";

export const Footer: React.FC = () => {
    return(
        <FooterContainer>
            <div className="rectangle139"></div>
            <div className="rectangle90"></div>
            <div className="group43">
                <img src={LogoSustMat} alt="" />
            </div>
            <div className="youtube">
                <button>
                <img src={YouTb} alt="" />
                </button>
            </div>
            <div className="facebook">
                <button>
                <img src={Face} alt="" />
                </button>
            </div>
            <div className="instagram">
                <button>
                <img src={Insta} alt="" />
                </button>
            </div>
            <div className="group1">
                <div className="vector">
                    <img src={Heart} alt="" />
                </div>
                <h1 className="made">Made with &lt;/&gt; and</h1>
                <h1 className="made2">by</h1>
                <div className="citi">
                    <img src={CitiBranco} alt="" />
                </div>
            </div>
            <h1 className="sustgold">©2022 by SustGold.</h1>
            <h1 className="desc">We increase the revenue that can be invested in ESG actions, ecological closure of the area and in socio-environmental actions, without compromising profitability and investor returns.</h1>
        </FooterContainer>
    );
}