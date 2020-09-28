import React, { useState } from "react";
import DetectAnyInput from "components/DetectAnyInput";
import ColorChangeBG from "components/ColorChangeBG";
import Face from "components/Face";
import "./style.css";

function Faces() {
    const [showingFace, setShowingFace] = useState(false);

    return (
        <DetectAnyInput
            onAnyInput={() => {
                setShowingFace(true);
            }}
        >
            <ColorChangeBG
                className="faces"
                colorList={["#40916c", "#52b788", "#74c69d"]}
                title="caras"
            >
                {showingFace && (
                    <Face onAnimationEnd={() => setShowingFace(false)} />
                )}
            </ColorChangeBG>
        </DetectAnyInput>
    );
}

export default Faces;
