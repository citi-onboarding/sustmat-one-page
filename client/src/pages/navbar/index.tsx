import React, {useState} from "react";
import { NavbarContainer } from "./styles";
import { LogoSustMat } from "../../assets";

export const Navbar: React.FC = () => {
    const [changeColor1, SetChangeColor1] = useState (true)
    const [changeColor2, SetChangeColor2] = useState (true)
    const [changeColor3, SetChangeColor3] = useState (true)
    const [changeColor4, SetChangeColor4] = useState (true)
    const [changeColor5, SetChangeColor5] = useState (true)

    return (
        <NavbarContainer id="Home">
            <img src={LogoSustMat} alt="" />
            <a href="#Hiring">
            <button onClick={() => {SetChangeColor1(false); SetChangeColor2(true); SetChangeColor3(true); SetChangeColor4(true); SetChangeColor5(true)}} className= {changeColor1? 'Tteam' : 'blueteam' }>Team</button>
            </a>
            <a href="#Caurosel">
            <button onClick={() => {SetChangeColor1(true); SetChangeColor2(false); SetChangeColor3(true); SetChangeColor4(true); SetChangeColor5(true)}} className= {changeColor2? 'Ttechnology' : 'bluetech' }>Technology</button>
            </a>
            <a href="#Advantages">
            <button onClick={() => {SetChangeColor1(true); SetChangeColor2(true); SetChangeColor3(false); SetChangeColor4(true); SetChangeColor5(true)}} className= {changeColor3? 'Tadvantages' : 'blueadva' }>Advantages</button>
            </a>
            <a href="#Banner">
            <button onClick={() => {SetChangeColor1(true); SetChangeColor2(true); SetChangeColor3(true); SetChangeColor4(false); SetChangeColor5(true)}} className= {changeColor4? 'Thome' : 'bluehome' }>Home</button>
            </a>
            <div className="contact">
                <div className="group45">
                    <a href="#ContactUs">
                    <button onClick={() => {SetChangeColor1(true); SetChangeColor2(true); SetChangeColor3(true); SetChangeColor4(true); SetChangeColor5(false)}} className= {changeColor5? 'rectangle150' : 'bluerectangle150' }>
                        <div className="Tcontact">Contact</div>
                    </button>
                    </a>
                </div>
            </div>
        </NavbarContainer>
    );
}