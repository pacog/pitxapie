import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lion from "./lion.svg";
import "./style.css";

class Animal extends React.Component {
    initialY = getRandomY();

    finalY = getRandomY();

    render() {
        return (
            <motion.div
                className="animal"
                animate={{
                    x: "-110vw",
                    y: `${this.finalY}vh`
                }}
                initial={{
                    x: "110vw",
                    y: `${this.initialY}vh`
                }}
                transition={{
                    duration: 4,
                    ease: "linear"
                }}
                onAnimationComplete={() => console.log("end")}
            >
                <img src={Lion} alt="Lion" />
            </motion.div>
        );
    }
}

function getRandomY() {
    return 20 + Math.floor(Math.random() * 60);
}

export default Animal;
