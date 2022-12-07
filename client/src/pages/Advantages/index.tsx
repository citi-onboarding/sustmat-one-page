import React from "react";
import { AdvantagesCardContainer, AdvantagesSectionContainer, TitleSection } from "./styles";
import { AdvantagesCard } from "../../components";


export const AdvantagesSection: React.FC = () =>{
    return(
        <AdvantagesSectionContainer>
            <TitleSection>
                Advantages of the <span id="SustmatWord">sustmat’s</span> <br/> liquefation mining
            </TitleSection>
            <AdvantagesCardContainer>
                <AdvantagesCard title={"Less damage to the nature"} description={"With our smart, innovative and disruptive technology we are able to mine gold sustainably"}/>
                <AdvantagesCard title={"Less damage to the nature"} description={"With our smart, innovative and disruptive technology we are able to mine gold sustainably"}/>
                <AdvantagesCard title={"Less damage to the nature"} description={"With our smart, innovative and disruptive technology we are able to mine gold sustainably"}/>
            </AdvantagesCardContainer>
        </AdvantagesSectionContainer>
    );
}