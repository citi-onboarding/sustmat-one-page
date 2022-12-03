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
                    <button className="rectangle150">
                        <div className="Tcontact">Contact</div>
                    </button>
                </div>
            </div>
        </NavbarContainer>
    );
}