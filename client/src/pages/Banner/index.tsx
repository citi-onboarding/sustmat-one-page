import React from "react";
import { BlueDetails, MouseVectorStart } from "../../assets";
import { MouseVector } from "../../assets";
import { ScrollContainer, TextContainer, BannerContainer} from "../Banner/styles";

export const Banner: React.FC = () =>{
    return(
        <BannerContainer>
            <p id="SmallTitle">
                Be part of the future
            </p>
            <h1 id="BigTitle1">
                Sustainable
            </h1>
            <h1 id="BigTitle2">
                Mining
            </h1>
            <img id="BlueDetails" src={BlueDetails} alt='Blue Details on both sides of the banner'/>
            <ScrollContainer>
                <img id="MouserVector1" src={MouseVectorStart} alt='Beggining of the Scroll animation'/>
                <TextContainer>
                <h1 id ="RollPT">
                    Role para baixo
                </h1>
                <p id="RollEN">
                    Scroll down
                </p>
                </TextContainer>
            </ScrollContainer>
        </BannerContainer>
    );
}