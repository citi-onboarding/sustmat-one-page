import React from "react";
import { NavbarContainer } from "./styles";
import { LogoSustMat } from "../../assets";

export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <img src={LogoSustMat} alt="" />
            <button className="Tteam">Team</button>
            <button className="Ttechnology">Technology</button>
            <button className="Tadvantages">Advantages</button>
            <button className="Thome">Home</button>
            <div className="contact">
                <div className="group45">
                    <div className="rectangle150">
                        <button className="Tcontact">Contact</button>
                    </div>
                </div>
            </div>
            <button className="rectangle2"></button>
        </NavbarContainer>
    );
}