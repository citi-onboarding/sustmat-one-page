import React from "react";
import { CardContainer, CardDescription, CardTitle } from "./styles";

type CardProps = {
    title: string;
    description: string;
}

export const AdvantagesCard: React.ElementType = ({title, description}: CardProps) =>{
    return(
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    );
}