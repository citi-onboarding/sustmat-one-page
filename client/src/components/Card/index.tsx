import ReactS, { ReactElement } from "react";
import { StyledCard } from "./styles";
import { Certinho } from "../../assets";

type CardProps = {
    technician: string;
}

export const CardComponent: React.ElementType = ({technician}:CardProps) => {
    return (
    <StyledCard>
        <div className="knowmorebutton">
            <div className="rectangle150">
                    <h1 className="knowmoretext">Know more</h1>
            </div>
        </div>
        <div className="group447">
            <h1 className="parttime">
                Part-time
                <br></br><br></br>
                Make the recovery of metals from extractor solution.
            </h1>
            <h1 className="requirements">Requirements</h1>
            <h1 className="technician">{technician}</h1>
            <img className="certinho" src={Certinho} alt="" />
            <img className="certinho2" src={Certinho} alt="" />
        </div>
    </StyledCard>
    );
}