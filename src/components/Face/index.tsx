import React, { useMemo } from "react";
import { motion } from "framer-motion";
import aafke from "./aafke.png";
import bisa from "./bisa.png";
import inaki_aafke from "./inaki_aafke.png";
import mama_1 from "./mama_1.png";
import massimo_2 from "./massimo_2.png";
import abuela_carmen from "./abuela_carmen.png";
import carla from "./carla.png";
import kakitrien from "./kakitrien.png";
import mama_2 from "./mama_2.png";
import massimo_alex from "./massimo_alex.png";
import abuelo_jose from "./abuelo_jose.png";
import carmen from "./carmen.png";
import lola from "./lola.png";
import manuel from "./manuel.png";
import rum from "./rum.png";
import abuelomiguel from "./abuelomiguel.png";
import carmen_aritz from "./carmen_aritz.png";
import lucas from "./lucas.png";
import manuel_agustin from "./manuel_agustin.png";
import rum_niki from "./rum_niki.png";
import andreu_1 from "./andreu_1.png";
import catrien_ana from "./catrien_ana.png";
import maka from "./maka.png";
import mark from "./mark.png";
import tres_locos from "./tres_locos.png";
import andreu_2 from "./andreu_2.png";
import giovane from "./giovane.png";
import mama from "./mama.png";
import massimo from "./massimo.png";
import xabi from "./xabi.png";

import {
    getRandomFromArray,
    getRandomFromArrayWithWeights,
} from "utils/random";
import "./style.css";

interface IFaceProps {
    onAnimationEnd: () => void;
}

const ALL_FACES = [
    aafke,
    bisa,
    inaki_aafke,
    mama_1,
    massimo_2,
    abuela_carmen,
    carla,
    kakitrien,
    mama_2,
    massimo_alex,
    abuelo_jose,
    carmen,
    lola,
    manuel,
    rum,
    abuelomiguel,
    carmen_aritz,
    lucas,
    manuel_agustin,
    rum_niki,
    andreu_1,
    catrien_ana,
    maka,
    mark,
    tres_locos,
    andreu_2,
    giovane,
    mama,
    massimo,
    xabi,
];
const ALTERNATIVE_POSITIONS = [
    {
        weight: 0.1,
        value: "top",
    },
    {
        weight: 0.1,
        value: "left",
    },
    {
        weight: 0.1,
        value: "right",
    },
    {
        weight: 0.7,
        value: "bottom",
    },
];

function Face({ onAnimationEnd }: IFaceProps) {
    const face = useMemo(() => getRandomFromArray(ALL_FACES), []);
    const position = useMemo(
        () => getRandomFromArrayWithWeights(ALTERNATIVE_POSITIONS),
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
