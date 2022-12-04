import React from "react";
import { BannerContainer } from "../banner/styles";
import { BlueDetails } from "../../assets";
import { MouseVector } from "../../assets";
import { ScrollContainer } from "../banner/styles";

export const Banner: React.FC = () =>{
    return(
        <BannerContainer>
            <p>
                Be part of the future
            </p>
            <h1>
                Sustainable
            </h1>
            <h2>
                Mining
            </h2>
            <img id="BlueDetails" src={BlueDetails} alt='Blue Details on both sides of the banner'/>
        </BannerContainer>
    );
}