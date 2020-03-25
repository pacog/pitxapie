import crocodile from "./crocodile.svg";
import dog from "./dog.svg";
import elephant from "./elephant.svg";
import fox from "./fox.svg";
import giraffe from "./giraffe.svg";
import lion from "./lion.svg";

interface IAnimalInfo {
    src: string;
    name: string;
}

const ALL_ANIMALS = [
    {
        src: crocodile,
        name: "crocodile"
    },
    {
        src: dog,
        name: "dog"
    },
    {
        src: elephant,
        name: "elephant"
    },
    {
        src: fox,
        name: "fox"
    },
    {
        src: giraffe,
        name: "giraffe"
    },
    {
        src: lion,
        name: "lion"
    }
];

export const getRandomAnimal = (): IAnimalInfo => {
    const randomIndex = Math.floor(Math.random() * ALL_ANIMALS.length);
    return ALL_ANIMALS[randomIndex];
};
