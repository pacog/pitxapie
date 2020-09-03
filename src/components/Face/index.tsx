import React from "react";
import { motion } from "framer-motion";
import Mama from "./mama.png";
import "./style.css";

interface IFaceProps {
    onAnimationEnd: () => void;
}

function Face({ onAnimationEnd }: IFaceProps) {
    return (
        <motion.div
            className="face"
            animate={{
                y: ["100%", "0%", "0%", "100%"],
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={{
                y: "100%",
            }}
            onAnimationComplete={onAnimationEnd}
        >
            <img src={Mama} alt={"Mama"} />
        </motion.div>
    );
}

export default Face;
