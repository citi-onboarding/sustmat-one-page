import React, { useEffect, useState } from "react";
import { Components, HiringContainer, HiringSubtitle, HiringTitle, Img } from "./styles";
import { CardComponent } from "../../components";
import { BlueBar } from "../../assets";
import api from "../../services/api";

type HiringData = {
    jobtitle: string;
    requirement: string[];
}

export const HiringSection: React.FC = () => {

    const [data, setData] = useState<HiringData[]>([]);

    async function getData() {
        try {
            const response = await api.get(`/hiring`);
            setData(response.data);
            console.log('HIRING DADOS');
            console.log(data)
        } catch (error) {
            console.log('Error connecting to database');
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <HiringContainer id="Hiring">
            <Img id="vector21" src={BlueBar} alt="" />
            <HiringTitle>We are hiring!</HiringTitle>
            <HiringSubtitle>Be a part of the sustmat team.</HiringSubtitle>
            
            <Components>
                {data.map((card)=><CardComponent technician={card.jobtitle} requirements={card.requirement} />)}
            </Components>
        </HiringContainer>
    );
}