import React, { useEffect, useMemo, useState } from "react";
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

interface IFaceInfo {
    fileName: string;
    name: string;
    language: string;
}

const ALL_FACES: IFaceInfo[] = [
    { fileName: aafke, name: "aafke", language: "en-US" },
    { fileName: bisa, name: "bisabuela", language: "es-ES" },
    { fileName: inaki_aafke, name: "iñaki y aafke", language: "es-ES" },
    { fileName: mama_1, name: "Mamá", language: "es-ES" },
    { fileName: massimo_2, name: "massimo", language: "it-IT" },
    { fileName: abuela_carmen, name: "abuela carmen", language: "es-ES" },
    { fileName: carla, name: "carla", language: "es-ES" },
    { fileName: kakitrien, name: "kaki catrien", language: "es-ES" },
    { fileName: mama_2, name: "mamá", language: "es-ES" },
    { fileName: massimo_alex, name: "massimo alex", language: "it-IT" },
    { fileName: abuelo_jose, name: "abuelo jose", language: "es-ES" },
    { fileName: carmen, name: "carmen", language: "es-ES" },
    { fileName: lola, name: "lola", language: "es-ES" },
    { fileName: manuel, name: "manuel", language: "es-ES" },
    { fileName: rum, name: "rum", language: "es-ES" },
    { fileName: abuelomiguel, name: "abuelo miguel", language: "es-ES" },
    { fileName: carmen_aritz, name: "carmen y aritz", language: "es-ES" },
    { fileName: lucas, name: "lucas", language: "es-ES" },
    { fileName: manuel_agustin, name: "manuel y agustin", language: "es-ES" },
    { fileName: rum_niki, name: "rum y niki", language: "es-ES" },
    { fileName: andreu_1, name: "andreu", language: "es-ES" },
    { fileName: catrien_ana, name: "catrien en ana", language: "nl-NL" },
    { fileName: maka, name: "maka", language: "es-ES" },
    { fileName: mark, name: "mark", language: "en-US" },
    { fileName: tres_locos, name: "tres locos", language: "es-ES" },
    { fileName: andreu_2, name: "andreu", language: "es-ES" },
    { fileName: giovane, name: "giovane", language: "pt-BR" },
    { fileName: mama, name: "mamá", language: "es-ES" },
    { fileName: massimo, name: "massimo", language: "it-IT" },
    { fileName: xabi, name: "xabi", language: "es-ES" },
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

    useSayName(face);

    return (
        <motion.div
            className={`face face-${position}`}
            animate={animate}
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={initial}
            onAnimationComplete={onAnimationEnd}
        >
            <img src={face.fileName} alt={""} />
        </motion.div>
    );
}

export default Face;

function useSayName(face: IFaceInfo) {
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(
        speechSynthesis.getVoices()
    );
    useEffect(() => {
        const onVoicesChanged = () => {
            if (!voices.length) {
                setVoices(speechSynthesis.getVoices());
                speechSynthesis.removeEventListener(
                    "voiceschanged",
                    onVoicesChanged
                );
            }
        };
        speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
        return () => {
            speechSynthesis.removeEventListener(
                "voiceschanged",
                onVoicesChanged
            );
        };
    });

    const selectedVoice = useMemo(() => {
        if (!face || !voices) {
            return null;
        }
        const voicesInLang = voices.filter(
            (voice) => voice.lang === face.language
        );
        if (!voicesInLang.length) {
            return null;
        }
        return getRandomFromArray(voicesInLang);
    }, [voices, face]);

    useEffect(() => {
        if (!selectedVoice || !face) {
            return;
        }
        let utterance = new SpeechSynthesisUtterance(face.name);
        utterance.voice = selectedVoice;
        utterance.pitch = 0.5 + Math.random();
        utterance.rate = 0.5 + Math.random();
        speechSynthesis.speak(utterance);
    }, [face, selectedVoice]);
}
