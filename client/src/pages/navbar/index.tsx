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
        <NavbarContainer>
            <img src={LogoSustMat} alt="" />
            <a href="#team">
            <button onClick={() => SetChangeColor1(!changeColor1)} className= {changeColor1? 'Tteam' : 'blueteam' }>Team</button>
            </a>
            <a href="#">
            <button onClick={() => SetChangeColor2(!changeColor2)} className= {changeColor2? 'Ttechnology' : 'bluetech' }>Technology</button>
            </a>
            <a href="#advantages">
            <button onClick={() => SetChangeColor3(!changeColor3)} className= {changeColor3? 'Tadvantages' : 'blueadva' }>Advantages</button>
            </a>
            <a href="#banner">
            <button onClick={() => SetChangeColor4(!changeColor4)} className= {changeColor4? 'Thome' : 'bluehome' }>Home</button>
            </a>
            <div className="contact">
                <div className="group45">
                    <a href="#">
                    <button onClick={() => SetChangeColor5(!changeColor5)} className= {changeColor5? 'rectangle150' : 'bluerectangle150' }>
                        <div className="Tcontact">Contact</div>
                    </button>
                    </a>
                </div>
            </div>
        </NavbarContainer>
    );
}