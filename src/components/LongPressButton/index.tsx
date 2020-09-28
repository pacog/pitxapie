import React, { useRef } from "react";
import { motion } from "framer-motion";

import "./style.css";

const TIME_TO_CHANGE = 1; // s

function LongPressButton({ onPress }: { onPress: () => void }) {
    const currentTime = useRef<number>(0);

    const onStartTap = () => {
        currentTime.current = performance.now();
    };
    const onEndTap = () => {
        const elapsedTime = (performance.now() - currentTime.current) / 1000;
        if (elapsedTime >= TIME_TO_CHANGE) {
            onPress();
        }
    };

    return (
        <motion.div
            className="long-press-button"
            onTapStart={onStartTap}
            onTap={onEndTap}
            initial={{ scale: 1, opacity: 0.1, backgroundColor: "#f48c06" }}
            whileTap={{
                scale: 3,
                opacity: 0.8,
                backgroundColor: "#fff",
                transition: { duration: TIME_TO_CHANGE },
            }}
        ></motion.div>
    );
}

export default LongPressButton;
