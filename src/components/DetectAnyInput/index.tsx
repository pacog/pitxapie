import React, { useRef, useEffect } from "react";
import { useThrottleFn } from "ahooks";

interface IDetectAnyInputProps {
    children: React.ReactNode;
    onAnyInput: () => void;
}

const isTouchSupported = "ontouchstart" in document.documentElement;

function DetectAnyInput({ onAnyInput, children }: IDetectAnyInputProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const { run: onAnyInputThrottled, cancel: cancelThrottle } = useThrottleFn(
        onAnyInput,
        {
            wait: 500,
            trailing: false,
        }
    );

    useEffect(() => {
        if (rootRef.current !== null) {
            rootRef.current.focus();
        }
    }, [rootRef]);

    useEffect(() => {
        return cancelThrottle;
    }, [cancelThrottle]);

    return (
        <div
            ref={rootRef}
            onMouseUp={() => {
                if (isTouchSupported) {
                    return;
                }
                onAnyInputThrottled();
            }}
            onKeyUp={onAnyInputThrottled}
            onTouchStart={onAnyInputThrottled}
            tabIndex={0}
        >
            {children}
        </div>
    );
}

export default DetectAnyInput;
