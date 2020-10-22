import React from "react";
import ColorChangeBG from "components/ColorChangeBG";
import WhackAnimal from "./WhackAnimal";
import "./style.css";

function WhackAnimals() {
    return (
        <ColorChangeBG
            colorList={["#85182a", "#a11d33", "#6e1423"]}
            title="whack-animal"
        >
            <div className="whack-animals">
                <WhackAnimal />
                <WhackAnimal />
                <WhackAnimal />
                <WhackAnimal />
            </div>
        </ColorChangeBG>
    );
}

export default WhackAnimals;
