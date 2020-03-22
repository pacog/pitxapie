import React from "react";

interface DetectAnyInputProps {
    children: React.ReactNode;
    onAnyInput: () => void;
}

function DetectAnyInput(props: DetectAnyInputProps) {
    return <div onClick={props.onAnyInput}>{props.children}</div>;
}

export default DetectAnyInput;
