import React, { useEffect, useState } from "react";
import { AdvantagesCardContainer, AdvantagesSectionContainer, TitleSection } from "./styles";
import { AdvantagesCard } from "../../components";
import api from "../../services/api";

type AdvantageData = {
    icon: string;
    title: string;
    description: string;
}

export const AdvantagesSection: React.FC = () =>{


    const [data, setData] = useState<AdvantageData[]>([]);

    async function getData() {
        try {
            const response = await api.get(`/adventage`);
            setData(response.data);
            console.log(data)
        } catch (error) {
            console.log('Error connecting to database');
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return(
        <AdvantagesSectionContainer id="Advantages">
            <TitleSection>
                Advantages of the <span id="SustmatWord">sustmat’s</span> <br/> liquefation mining
            </TitleSection>
            <AdvantagesCardContainer>
               {data.map( (card) => <AdvantagesCard icon={card.icon} title={card.title} description={card.description}/>)}
            </AdvantagesCardContainer>
        </AdvantagesSectionContainer>
    );
}