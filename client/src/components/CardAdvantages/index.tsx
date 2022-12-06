import React from "react";
import { Buttom, ButtomText, CardContainer, CardDescription, CardTitle, IconContainer } from "./styles";

type CardProps = {
    title: string;
    description: string;
}

export const AdvantagesCard: React.ElementType = ({title, description}: CardProps) =>{
    return(
        <CardContainer>
            <IconContainer>             
            </IconContainer>
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