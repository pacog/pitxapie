import React from "react";
import DetectAnyInput from "components/DetectAnyInput";
import { motion } from "framer-motion";

import "./style.css";

function Animals() {
    return (
        <DetectAnyInput
            onAnyInput={() => {
                console.log("hola");
            }}
        >
            <motion.div
                animate={{
                    backgroundColor: [
                        // "#231942",
                        "#5e548e",
                        "#9f86c0",
                        "#be95c4"
                        // "#e0b1cb"
                    ]
                }}
                transition={{ yoyo: Infinity, duration: 10, ease: "linear" }}
                className="animals full-screen"
            ></motion.div>
        </DetectAnyInput>
    );
}

export default Animals;
