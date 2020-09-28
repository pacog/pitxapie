import React, { useState } from "react";
import DetectAnyInput from "components/DetectAnyInput";
import Animal from "components/Animal";
import { v4 as uuid } from "uuid";
import ColorChangeBG from "components/ColorChangeBG";
import "./style.css";

function Animals() {
    const [shownAnimals, setShownAnimals] = useState<string[]>([]);

    return (
        <DetectAnyInput
            onAnyInput={() => {
                setShownAnimals([...shownAnimals, uuid()]);
            }}
        >
            <ColorChangeBG className="animals" title="animales">
                {shownAnimals.map((id) => (
                    <Animal
                        key={id}
                        onAnimationEnd={() => {
                            setShownAnimals(
                                shownAnimals.filter(
                                    (animalId) => animalId !== id
                                )
                            );
                        }}
                    />
                ))}
            </ColorChangeBG>
        </DetectAnyInput>
    );
}

export default Animals;
