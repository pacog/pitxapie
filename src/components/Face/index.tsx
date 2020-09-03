import React from "react";
import Mama from "./mama.png";
import "./style.css";

function Face() {
    return (
        <div className="face">
            <img src={Mama} alt={"Mama"} />
        </div>
    );
}

export default Face;
