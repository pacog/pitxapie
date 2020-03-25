import React from "react";
import { motion } from "framer-motion";
import Lion from "./lion.svg";
import "./style.css";

interface AnimalProps {
    onAnimationEnd: () => void;
}

class Animal extends React.Component<AnimalProps> {
    initialY = getRandomY();

    finalY = getRandomY();

    render() {
        return (
            <motion.div
                className="animal"
                animate={{
                    x: "-75vw",
                    y: `${this.finalY}vh`
                }}
                initial={{
                    x: "75vw",
                    y: `${this.initialY}vh`
                }}
                transition={{
                    duration: 2,
                    ease: "linear"
                }}
                onAnimationComplete={this.props.onAnimationEnd}
            >
                <img src={Lion} alt="Lion" />
            </motion.div>
        );
    }
}

function getRandomY() {
    return -50 + Math.floor(Math.random() * 100);
}

export default Animal;
