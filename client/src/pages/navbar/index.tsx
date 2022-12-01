import React from "react";
import { NavbarContainer } from "./styles";
import { LogoSustMat } from "../../assets";

export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <img src={LogoSustMat} alt="" />
            <h1 className="Tteam">Team</h1>
            <h1 className="Ttechnology">Technology</h1>
            <h1 className="Tadvantages">Advantages</h1>
            <h1 className="Thome">Home</h1>
            <div className="contact">
                <div className="group45">
                    <div className="rectangle150">
                        <h1 className="Tcontact">Contact</h1>
                    </div>
                </div>
            </div>
            <div className="rectangle2"></div>
        </NavbarContainer>
    );
}