import React from "react";
import { HiringContainer } from "./styles";
import { Certinho } from "../../assets";
import { BlueBar } from "../../assets";

export const HiringSection: React.FC = () => {
    return (
        <HiringContainer>
            <div className="vector21">
                <img src={BlueBar} alt="" />
            </div>
            <h1 className="wearehiring">We are hiring!</h1>
            <h1 className="beapart">Be a part of the sustmat team.</h1>
            <div className="hiringcard">
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
                    <h1 className="technician">Chemistry Technician</h1>
                    <img className="certinho" src={Certinho} alt="" />
                </div>
            </div>
        </HiringContainer>
    );
}