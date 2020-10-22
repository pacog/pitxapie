import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Title from "./Title";
import "./style.css";

interface IColorChangeBGProps {
    className?: string;
    colorList?: string[];
    children: React.ReactNode;
    title?: string;
}

function ColorChangeBG({
    className = "",
    colorList = ["#5e548e", "#9f86c0", "#be95c4"],
    children,
    title,
}: IColorChangeBGProps) {
    return (
        <motion.div
            animate={{
                backgroundColor: colorList,
            }}
            transition={{ yoyo: Infinity, duration: 10, ease: "linear" }}
            className={classNames("color-change-bg", className)}
        >
            {title && <Title text={title} />}
            {children}
        </motion.div>
    );
}

export default ColorChangeBG;
