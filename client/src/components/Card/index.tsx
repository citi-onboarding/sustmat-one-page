import ReactS, { ReactElement, useEffect, useState } from "react";
import { StyledCard } from "./styles";
import { Certinho } from "../../assets";
import api from "../../services/api";

type CardProps = {
    technician: string;
}

type CardData = {
    requirements: string[];
}

export const CardComponent: React.ElementType = ({technician}:CardProps) => {


    const [data, setData] = useState<CardData[]>([]);

    async function getData() {
        try {
            const response = await api.get(`/hiring`);
            setData(response.data);
            console.log("HIRING DADOS");
            console.log(data);
        } catch (error) {
            console.log('Error connecting to database');
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
    <StyledCard>
        <button className="knowmorebutton">
            <div className="rectangle150">
                    <h1 className="knowmoretext">Know more</h1>
            </div>
        </button>
        <div className="group447">
            <h1 className="parttime">
                Part-time
                <br></br><br></br>
                Make the recovery of metals from extractor solution.
            </h1>
            {/* {data.map((requirement)=> <h1 className="parttime">{requirement.requirements[0]}</h1> )} */}
            <h1 className="requirements">Requirements</h1>
            <h1 className="technician">{technician}</h1>
            <img className="certinho" src={Certinho} alt="" />
            <img className="certinho2" src={Certinho} alt="" />
        </div>
    </StyledCard>
    );
}