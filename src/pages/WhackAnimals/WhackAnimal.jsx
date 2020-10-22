import React, { useState } from "react";
import { getRandomAnimal } from "assets/animals/getRandomAnimal";
import "./WhackAnimal.css";

function WhackAnimal() {
    const [randomAnimal] = useState(getRandomAnimal());

    return (
        <div className="whack-animal">
            <img src={randomAnimal.src} alt={randomAnimal.name} />
        </div>
    );
}

export default WhackAnimal;
