import React from "react";
import { Buttom, ButtomText, CardContainer, CardDescription, CardTitle, IconContainer } from "./styles";

type CardProps = {
    title: string;
    description: string;
    icon: string;
}

export const AdvantagesCard: React.ElementType = ({title, description, icon}: CardProps) =>{
    return(
        <CardContainer>
            <IconContainer><img width={56} height={56} src={icon} alt="icon"/></IconContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <Buttom>
                <ButtomText>
                    Know More
                </ButtomText>
            </Buttom>
        </CardContainer>
    );
}