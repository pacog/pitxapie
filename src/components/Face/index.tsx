import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ALL_FACES, IFaceInfo } from "./allFaces";

import {
    getRandomFromArray,
    getRandomFromArrayWithWeights,
} from "utils/random";
import "./style.css";

interface IFaceProps {
    onAnimationEnd: () => void;
}

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
    const [isLoaded, setIsLoaded] = useState(false);

    // Fallback in case image doesn't load, so we still notify an end
    useEffect(() => {
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    useSayName(face);

    return (
        <motion.div
            className={`face face-${position}`}
            animate={isLoaded ? animate : false}
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={initial}
            onAnimationComplete={onAnimationEnd}
        >
            <img
                src={face.fileName}
                alt={""}
                onLoad={() => setIsLoaded(true)}
            />
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
