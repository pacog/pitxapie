import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    getRandomAnimal,
    getRandomAnimalWithout,
} from "assets/animals/getRandomAnimal";
import { getRandomFromArray, getRandomWithLimits } from "utils/random";
import { playSound } from "utils/play-sound";
import "./WhackAnimal.css";

function WhackAnimal() {
    const [randomAnimal, setRandomAnimal] = useState(getRandomAnimal());
    const [shown, setIsShown] = useState(false);
    useEffect(() => {
        setIsShown(false);
        const timeout = setTimeout(() => {
            setIsShown(true);
        }, getRandomWithLimits(3000, 8000));
        return () => {
            clearTimeout(timeout);
        };
    }, [randomAnimal]);

    const onClick = () => {
        const sound = getRandomFromArray(randomAnimal.sounds);
        playSound(process.env.PUBLIC_URL + sound);
        setRandomAnimal(getRandomAnimalWithout(randomAnimal));
    };
    const onAnimationEnd = () => {
        setRandomAnimal(getRandomAnimalWithout(randomAnimal));
    };

    return (
        <div className="whack-animal" onClick={onClick}>
            {shown && (
                <motion.img
                    src={randomAnimal.src}
                    alt={randomAnimal.name}
                    animate={{
                        scale: [0, 1, 1, 1, 0],
                    }}
                    initial={{
                        scale: 0.1,
                    }}
                    transition={{ duration: 5, ease: "easeInOut" }}
                    onAnimationComplete={onAnimationEnd}
                />
            )}
        </div>
    );
}

export default WhackAnimal;
