import React from "react";
import { ButtonWrapper, Card, CardTitle, Container, Image, RequirementContainer, RequirementText, RiquirementsText } from "./styles";
import { ButtonComponent } from "../Button";
import { sentIcon } from "../../assets";


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