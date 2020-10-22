import React from "react";
import { motion } from "framer-motion";
import "./Title.css";

function Title({ text }) {
    return (
        <motion.div
            className="color-change-bg__title"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0 }}
            transition={{
                delay: 1,
                duration: 1,
                ease: "easeIn",
            }}
        >
            {text}
        </motion.div>
    );
}

export default Title;
