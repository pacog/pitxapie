import React from "react";
import ColorChangeBG from "components/ColorChangeBG";
import "./style.css";

function WhackAnimals() {
    return (
        <ColorChangeBG
            className="whack-animals"
            colorList={["#85182a", "#a11d33", "#6e1423"]}
            title="whack-animal"
        ></ColorChangeBG>
    );
}

export default WhackAnimals;
