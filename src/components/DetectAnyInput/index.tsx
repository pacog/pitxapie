import React from "react";
import { throttle } from "lodash";

interface IDetectAnyInputProps {
    children: React.ReactNode;
    onAnyInput: () => void;
}

const isTouchSupported = "ontouchstart" in document.documentElement;

class DetectAnyInput extends React.Component<IDetectAnyInputProps> {
    constructor(props: IDetectAnyInputProps) {
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
                onMouseUp={() => {
                    if (isTouchSupported) {
                        return;
                    }
                    this.onAnyInput();
                }}
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
