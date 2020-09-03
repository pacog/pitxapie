import React, { useState } from "react";
import DetectAnyInput from "components/DetectAnyInput";
import ColorChangeBG from "components/ColorChangeBG";
import Face from "components/Face";
import "./style.css";

function Faces() {
    const [canShowFace, setCanShowFace] = useState(true);

    return (
        <DetectAnyInput onAnyInput={() => {}}>
            <ColorChangeBG
                className="faces"
                colorList={["#40916c", "#52b788", "#74c69d"]}
            >
                <Face />
            </ColorChangeBG>
        </DetectAnyInput>
    );
}

export default Faces;
