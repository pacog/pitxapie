import React from "react";
import { motion } from "framer-motion";
import { getRandomAnimal } from "./getRandomAnimal";
import { playSound } from "utils/play-sound";
import { getRandomFromArray } from "utils/random";
import "./style.css";

interface IAnimalProps {
    onAnimationEnd: () => void;
}

class Animal extends React.Component<IAnimalProps> {
    initialX = getRandomPosition();
    initialY = getRandomPosition();
    randomAnimal = getRandomAnimal();

    componentDidMount() {
        const sound = getRandomFromArray(this.randomAnimal.sounds);
        playSound(process.env.PUBLIC_URL + sound);
    }

    render() {
        return (
            <motion.div
                className="animal"
                animate={{
                    scale: [0, 1, 1, 1, 0]
                }}
                initial={{
                    x: `${this.initialX}vw`,
                    y: `${this.initialY}vh`,
                    scale: 0.1
                }}
                onAnimationComplete={this.props.onAnimationEnd}
            >
                <img src={this.randomAnimal.src} alt={this.randomAnimal.name} />
            </motion.div>
        );
    }
}

function getRandomPosition() {
    return -25 + Math.floor(Math.random() * 50);
}

export default Animal;
