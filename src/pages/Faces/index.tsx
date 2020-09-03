import React from "react";
import DetectAnyInput from "components/DetectAnyInput";
import ColorChangeBG from "components/ColorChangeBG";
import "./style.css";

function Faces() {
    return (
        <DetectAnyInput onAnyInput={() => {}}>
            <ColorChangeBG
                className="faces"
                colorList={["#5e548e", "#9f86c0", "#be95c4"]}
            >
                Hola
            </ColorChangeBG>
        </DetectAnyInput>
    );
}

export default Faces;
