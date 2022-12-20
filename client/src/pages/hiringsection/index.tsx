import React from "react";
import { Components, HiringContainer } from "./styles";
import { CardComponent } from "../../components";
import { BlueBar } from "../../assets";

export const HiringSection: React.FC = () => {
    return (
        <HiringContainer id="Hiring">
            <img id="vector21" src={BlueBar} alt="" />
            <h1 className="wearehiring">We are hiring!</h1>
            <h1 className="beapart">Be a part of the sustmat team.</h1>
            <Components>
                <CardComponent technician={"Chemistry Technician"}/>
                <CardComponent technician={"Chemistry Technician"}/>
                <CardComponent technician={"Processing Technician"}/>
            </Components>
        </HiringContainer>
    );
}