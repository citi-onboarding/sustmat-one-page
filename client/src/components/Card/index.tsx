import ReactS, { ReactElement, useEffect, useState } from "react";
import { Card, CardTitle, Image, RequirementContainer, RequirementText, RiquirementsText, StyledCard } from "./styles";
import { Certinho, sentIcon } from "../../assets";
import api from "../../services/api";


type CardData = {
    technician: string;
    requirements: string[];
}

export const CardComponent: React.ElementType = ({technician, requirements}:CardData) => {


    return (
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
    );
}