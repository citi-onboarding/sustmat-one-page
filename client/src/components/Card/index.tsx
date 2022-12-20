import ReactS, { ReactElement, useEffect, useState } from "react";
import { ButtonWrapper, Card, CardTitle, Container, Image, RequirementContainer, RequirementText, RiquirementsText, StyledCard } from "./styles";
import { Certinho, sentIcon } from "../../assets";
import api from "../../services/api";
import { ButtonComponent } from "../Button";
import { ButtonContainer } from "../Button/styles";


type CardData = {
    technician: string;
    requirements: string[];
}

export const CardComponent: React.ElementType = ({technician, requirements}:CardData) => {


    return (
    <Container>
        <Card>
            <CardTitle>{technician}</CardTitle>
            <RiquirementsText>Requirements</RiquirementsText>
            {requirements.map((requirement) => 
                <RequirementContainer>
                    <Image src={sentIcon} />
                    <RequirementText>{requirement}</RequirementText>
                </RequirementContainer>
            )}
            
        </Card>
        <ButtonWrapper><ButtonComponent /></ButtonWrapper>
        
    </Container>
    );
}