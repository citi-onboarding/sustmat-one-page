import React from "react";
import { AdvantagesCardContainer, AdvantagesSectionContainer, TitleSection } from "./styles";
import { AdvantagesCard } from "../../components";
import { backgroundimage } from "../../assets"
import { url } from "inspector";


export const AdvantagesSection: React.FC = () =>{
    return(
        <AdvantagesSectionContainer id="Advantages">
            <TitleSection>
                Advantages of the <span id="SustmatWord">sustmat’s</span> <br/> liquefation mining
            </TitleSection>
            <AdvantagesCardContainer>
                <AdvantagesCard icon={"https://lh3.googleusercontent.com/pw/AL9nZEUOJXigOOrRQo7ulkyVu9Ratr5F2zlSmmwRCp7-9r7ptz-KOrvxE7RKpBORfOebib3Y2NadpsxgIzdRzcdOjrMvzHuzcakUJ8zzPuFKJogMMKFW8ps4kMSdO6yegrEgQtFm5KzoScw_JpM2ZFM6J3Q=w56-h43-no?authuser=3"}
                title={"Less damage to the nature"} description={"With our smart, innovative and disruptive technology we are able to mine gold sustainably"}/>
                <AdvantagesCard icon={"https://lh3.googleusercontent.com/pw/AL9nZEVyStOuKJPoNRQWT_z30tgkRMCW6E9bdLciw2vmYRx9rkzzKpoinLDlXOMyZEFio0_Tpv_COQMVG5SvEckqAmnszapMiZa25jNd5cCSGig1jypqTl70ZbuVWGcYvoidTh0KfK1j0Vf4OB5Owb-AqNI=w35-h46-no?authuser=3"}
                title={"More revenue"} description={"We increase the revenue that can be invested in ESG actions, ecological closure of the area and in socio-environmental actions"}/>
                <AdvantagesCard icon={"https://lh3.googleusercontent.com/pw/AL9nZEVfUKcncxXUfHJP71Z9hRsJftucFYYMGr4CcdpxMeESzrvu6Dd-qDDyJTJ9Rls_qwaeBxIg1uXDBpdH1g1jYN70wFKl4XgOUKNjiHFEr5NNWferP6ElTNSCQga9Dol94wqPiDRkPOci_I8Y_Wur-X0=w42-h35-no?authuser=3"}
                title={"High technology"} description={"We have patents for using the effects of liquefaction to do mineral separation and dewatering"}/>
            </AdvantagesCardContainer>
        </AdvantagesSectionContainer>
    );
}