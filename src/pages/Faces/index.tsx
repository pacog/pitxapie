import React, { useEffect, useState } from "react";
import DetectAnyInput from "components/DetectAnyInput";
import ColorChangeBG from "components/ColorChangeBG";
import Face from "components/Face";
import { ALL_FACES } from "components/Face/allFaces";
import { loadImage } from "utils/load-image";
import "./style.css";

function Faces() {
    const [showingFace, setShowingFace] = useState(false);

    // Preload all faces
    useEffect(() => {
        ALL_FACES.forEach((face) => loadImage(face.fileName));
    }, []);

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
