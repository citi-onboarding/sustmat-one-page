import React from "react";
import { BlueBar } from "../../assets";
import { CarouselContainer, TextContainer, Button, ButtonText } from "../Carousel/styles";



export const Carousel: React.FC = () => {
    return(
        <CarouselContainer>
            <TextContainer>
                <img id="BlueDetail" src={BlueBar} alt='Blue Bar'/>
                <h1>
                    Who we are and our <br/> technology
                </h1>
                <p>
                    By applying vibrations, the grains are arranged 
                    better and closer to each other. If this liquid is the 
                    gold extracting solution, as it rises and passes through the 
                    material, it will extract the gold. <b/> A system of the equipment 
                    separates the layers, allowing the separation of the "metals" 
                    from the tailings. A separating plate is introduced and the layer 
                    of "metals" is dropped and removed. After that, the separator plate 
                    is removed and the tailings layer falls, being taken to start the 
                    recovery of the already mined area. Our technology allows, if necessary, 
                    to circulate detoxifying and neutralizing solutions, which guarantee 
                    that the tailings will be the right material for the development of 
                    plants and animals.
                </p>
                <Button>
                    <ButtonText>
                        Contact us
                    </ButtonText>
                </Button>
            </TextContainer>
        </CarouselContainer>
    );
}