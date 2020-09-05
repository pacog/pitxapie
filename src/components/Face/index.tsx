import React, { useMemo } from "react";
import { motion } from "framer-motion";
import mama from "./mama.png";
import massimo from "./massimo.png";
import abuelomiguel from "./abuelomiguel.png";
import kakitrien from "./kakitrien.png";
import lola from "./lola.png";
import mark from "./mark.png";
import lucas from "./lucas.png";
import { getRandomFromArray } from "utils/random";
import "./style.css";

interface IFaceProps {
    onAnimationEnd: () => void;
}

const ALL_FACES = [mama, massimo, abuelomiguel, kakitrien, lola, mark, lucas];
const ALTERNATIVE_POSITIONS = ["top", "left", "right", "bottom"];

function Face({ onAnimationEnd }: IFaceProps) {
    const face = useMemo(() => getRandomFromArray(ALL_FACES), []);
    const position = useMemo(
        () => getRandomFromArray(ALTERNATIVE_POSITIONS),
        []
    );
    const animate = useMemo(() => {
        switch (position) {
            case "top":
                return {
                    y: ["-100%", "0%", "0%", "-100%"],
                };
            case "bottom":
                return {
                    y: ["100%", "0%", "0%", "100%"],
                };
            case "left":
                return {
                    x: ["-100%", "0%", "0%", "-100%"],
                };
            case "right":
                return {
                    x: ["100%", "0%", "0%", "100%"],
                };
        }
    }, [position]);

    const initial = useMemo(() => {
        switch (position) {
            case "top":
                return {
                    y: "-100%",
                    rotate: "-180deg",
                };
            case "bottom":
                return {
                    y: "100%",
                };
            case "left":
                return {
                    x: "-100%",
                    rotate: "90deg",
                };
            case "right":
                return {
                    x: "100%",
                    rotate: "-90deg",
                };
        }
    }, [position]);

    return (
        <motion.div
            className={`face face-${position}`}
            animate={animate}
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={initial}
            onAnimationComplete={onAnimationEnd}
        >
            <img src={face} alt={""} />
        </motion.div>
    );
}

export default Face;
