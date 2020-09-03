import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface IColorChangeBGProps {
    className?: string;
    colorList?: string[];
    children: React.ReactNode;
}

function ColorChangeBG({
    className = "",
    colorList = ["#5e548e", "#9f86c0", "#be95c4"],
    children,
}: IColorChangeBGProps) {
    return (
        <motion.div
            animate={{
                backgroundColor: colorList,
            }}
            transition={{ yoyo: Infinity, duration: 10, ease: "linear" }}
            className={classNames("full-screen", className)}
        >
            {children}
        </motion.div>
    );
}

export default ColorChangeBG;
