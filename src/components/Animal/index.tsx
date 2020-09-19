import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getRandomAnimal } from "./getRandomAnimal";
import { playSound } from "utils/play-sound";
import { getRandomFromArray } from "utils/random";
import "./style.css";

interface IAnimalProps {
    onAnimationEnd: () => void;
}

function Animal({ onAnimationEnd }: IAnimalProps) {
    const [initialX] = useState(getRandomPosition());
    const [initialY] = useState(getRandomPosition());
    const [randomAnimal] = useState(getRandomAnimal());

    useEffect(() => {
        const sound = getRandomFromArray(randomAnimal.sounds);
        playSound(process.env.PUBLIC_URL + sound);
    }, [randomAnimal]);

    return (
        <motion.div
            className="animal"
            animate={{
                scale: [0, 1, 1, 1, 0],
            }}
            initial={{
                x: `${initialX}vw`,
                y: `${initialY}vh`,
                scale: 0.1,
            }}
            onAnimationComplete={onAnimationEnd}
        >
            <img src={randomAnimal.src} alt={randomAnimal.name} />
        </motion.div>
    );
}

function getRandomPosition() {
    return -25 + Math.floor(Math.random() * 50);
}

export default Animal;
