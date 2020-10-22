import React, { useEffect, useState } from "react";
import { getRandomAnimal } from "assets/animals/getRandomAnimal";
import "./WhackAnimal.css";
import { getRandomWithLimits } from "utils/random";

function WhackAnimal() {
    const [randomAnimal, setRandomAnimal] = useState(getRandomAnimal());
    const [shown, setIsShown] = useState(false);
    useEffect(() => {
        setIsShown(false);
        const timeout = setTimeout(() => {
            setIsShown(true);
        }, getRandomWithLimits(1000, 5000));
        return () => {
            clearTimeout(timeout);
        };
    }, [randomAnimal]);

    const onClick = () => {
        setRandomAnimal(getRandomAnimal());
    };

    return (
        <div className="whack-animal" onClick={onClick}>
            {shown && <img src={randomAnimal.src} alt={randomAnimal.name} />}
        </div>
    );
}

export default WhackAnimal;
