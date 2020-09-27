import React from "react";
import { motion } from "framer-motion";

import "./style.css";

const TIME_TO_CHANGE = 2; // s

function RandomRouteButton() {
    const onStartTap = () => {
        console.log("start");
    };
    const onEndTap = () => {
        console.log("end");
    };

    const onCancelTap = () => {
        console.log("cancel");
    };

    return (
        <motion.div
            className="random-route-button"
            onTapStart={onStartTap}
            onTap={onEndTap}
            onTapCancel={onCancelTap}
            initial={{ scale: 0.3, opacity: 0.1, backgroundColor: "#f48c06" }}
            whileTap={{
                scale: 1,
                opacity: 0.8,
                backgroundColor: "white",
                transition: { duration: TIME_TO_CHANGE },
            }}
        ></motion.div>
    );
}

export default RandomRouteButton;
