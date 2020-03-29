import React from "react";
import { throttle } from "lodash";

interface DetectAnyInputProps {
    children: React.ReactNode;
    onAnyInput: () => void;
}

class DetectAnyInput extends React.Component<DetectAnyInputProps> {
    constructor(props: DetectAnyInputProps) {
        super(props);
        this.rootRef = React.createRef<HTMLDivElement>();
        this.onAnyInput = throttle(props.onAnyInput, 300);
    }

    rootRef: React.RefObject<HTMLDivElement>;

    onAnyInput: () => void;

    componentDidMount() {
        if (this.rootRef.current !== null) {
            this.rootRef.current.focus();
        }
    }

    render() {
        return (
            <div
                ref={this.rootRef}
                onMouseUp={this.onAnyInput}
                onKeyUp={this.onAnyInput}
                onTouchStart={this.onAnyInput}
                tabIndex={0}
            >
                {this.props.children}
            </div>
        );
    }
}

export default DetectAnyInput;
