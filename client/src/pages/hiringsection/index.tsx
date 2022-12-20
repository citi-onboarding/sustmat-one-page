import React, { useEffect, useState } from "react";
import { Components, HiringContainer } from "./styles";
import { CardComponent } from "../../components";
import { BlueBar } from "../../assets";
import api from "../../services/api";

type HiringData = {
    job: string;
}

export const HiringSection: React.FC = () => {

    const [data, setData] = useState<HiringData[]>([]);

    async function getData() {
        try {
            const response = await api.get(`/hiring`);
            setData(response.data);
        } catch (error) {
            console.log('Error connecting to database');
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <HiringContainer id="Hiring">
            <img id="vector21" src={BlueBar} alt="" />
            <h1 className="wearehiring">We are hiring!</h1>
            <h1 className="beapart">Be a part of the sustmat team.</h1>
            <Components>
                {/* <CardComponent technician={"Chemistry Technician"}/>
                <CardComponent technician={"Chemistry Technician"}/>
                <CardComponent technician={"Processing Technician"}/> */}
                {data.map((card)=><CardComponent technician={card.job}/>)}
            </Components>
        </HiringContainer>
    );
}