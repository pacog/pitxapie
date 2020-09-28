import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

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
            className={classNames("full-screen", className)}
        >
            {title && (
                <motion.div
                    className="full-screen__title"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                >
                    {title}
                </motion.div>
            )}
            {children}
        </motion.div>
    );
}

export default ColorChangeBG;
