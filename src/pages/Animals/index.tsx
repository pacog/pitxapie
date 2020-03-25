import React, { useState } from "react";
import DetectAnyInput from "components/DetectAnyInput";
import { motion } from "framer-motion";
import Animal from "components/Animal";
import { v4 as uuid } from "uuid";
import "./style.css";

function Animals() {
    const [shownAnimals, setShownAnimals] = useState<string[]>([]);

    return (
        <DetectAnyInput
            onAnyInput={() => {
                setShownAnimals([...shownAnimals, uuid()]);
            }}
        >
            <motion.div
                animate={{
                    backgroundColor: [
                        // "#231942",
                        "#5e548e",
                        "#9f86c0",
                        "#be95c4"
                        // "#e0b1cb"
                    ]
                }}
                transition={{ yoyo: Infinity, duration: 10, ease: "linear" }}
                className="animals full-screen"
            >
                {shownAnimals.map(id => (
                    <Animal
                        key={id}
                        onAnimationEnd={() => {
                            setShownAnimals(
                                shownAnimals.filter(animalId => animalId !== id)
                            );
                        }}
                    />
                ))}
            </motion.div>
        </DetectAnyInput>
    );
}

export default Animals;
