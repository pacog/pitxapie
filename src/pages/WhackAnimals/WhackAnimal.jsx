import React, { useEffect, useMemo, useState } from "react";
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
    const [isShown, setIsShown] = useState(false);
    const [isAnimatingAfterClick, setIsAnimatingAfterClick] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsShown(true);
        }, getRandomWithLimits(3000, 8000));
        return () => {
            clearTimeout(timeout);
        };
    }, [randomAnimal]);

    const animation = useMemo(() => {
        if (isAnimatingAfterClick) {
            return {
                scale: [1, 1.2, 0],
                rotate: [0, -15, 15, 0],
            };
        }
        return {
            scale: [0, 1, 1, 1, 0],
        };
    }, [isAnimatingAfterClick]);

    const transition = useMemo(() => {
        if (isAnimatingAfterClick) {
            return { duration: 2, ease: "easeInOut" };
        }
        return { duration: 5, ease: "easeInOut" };
    }, [isAnimatingAfterClick]);

    const onClick = () => {
        const sound = getRandomFromArray(randomAnimal.sounds);
        playSound(process.env.PUBLIC_URL + sound);
        setIsAnimatingAfterClick(true);
    };
    const onAnimationEnd = () => {
        setIsShown(false);
        setIsAnimatingAfterClick(false);
        setRandomAnimal(getRandomAnimalWithout(randomAnimal));
    };

    return (
        <div className="whack-animal" onClick={onClick}>
            {isShown && (
                <motion.img
                    src={randomAnimal.src}
                    alt={randomAnimal.name}
                    animate={animation}
                    initial={{
                        scale: 0.1,
                    }}
                    transition={transition}
                    onAnimationComplete={onAnimationEnd}
                />
            )}
            {isAnimatingAfterClick && (
                <motion.div
                    className="whack-animal__on-click"
                    // animate={{
                    //     scale: 0.01,
                    //     opacity: 0,
                    // }}
                    // initial={{
                    //     scale: 1,
                    //     opacity: 1,
                    // }}
                    // transition={transition}
                />
            )}
        </div>
    );
}

export default WhackAnimal;
