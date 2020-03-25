import React, { useEffect, useRef } from "react";

interface DetectAnyInputProps {
    children: React.ReactNode;
    onAnyInput: () => void;
}

function DetectAnyInput(props: DetectAnyInputProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const current = rootRef.current;
        if (current !== null) {
            current.focus();
        }
    }, []);
    return (
        <div
            ref={rootRef}
            onClick={props.onAnyInput}
            onKeyDown={props.onAnyInput}
            tabIndex={0}
        >
            {props.children}
        </div>
    );
}

export default DetectAnyInput;
