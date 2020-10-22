import crocodile from "./crocodile.svg";
import dog from "./dog.svg";
import elephant from "./elephant.svg";
import fox from "./fox.svg";
import giraffe from "./giraffe.svg";
import lion from "./lion.svg";
import chick from "./chick.svg";
import pig from "./pig.svg";
import crab from "./crab.svg";
import chicken from "./chicken.svg";
import boar from "./boar.svg";
import cow from "./cow.svg";
import frog from "./frog.svg";
import goat from "./goat.svg";
import rooster from "./rooster.svg";
import sheep from "./sheep.svg";
import { getRandomFromArray } from "utils/random";

interface IAnimalInfo {
    src: string;
    name: string;
    sounds: string[];
}

const ALL_ANIMALS = [
    {
        src: crocodile,
        name: "crocodile",
        sounds: ["/sounds/crocodile1.mp3", "/sounds/crocodile2.mp3"]
    },
    {
        src: dog,
        name: "dog",
        sounds: ["/sounds/dog1.mp3", "/sounds/dog2.mp3", "/sounds/dog3.mp3"]
    },
    {
        src: elephant,
        name: "elephant",
        sounds: ["/sounds/elephant1.mp3", "/sounds/elephant2.mp3"]
    },
    {
        src: fox,
        name: "fox",
        sounds: ["/sounds/fox1.mp3"]
    },
    {
        src: giraffe,
        name: "giraffe",
        sounds: ["/sounds/giraffe1.mp3", "/sounds/giraffe2.mp3"]
    },
    {
        src: lion,
        name: "lion",
        sounds: ["/sounds/lion1.mp3", "/sounds/lion2.mp3"]
    },
    {
        src: chick,
        name: "chick",
        sounds: ["/sounds/chick1.mp3"]
    },
    {
        src: pig,
        name: "pig",
        sounds: ["/sounds/pig1.mp3", "/sounds/pig2.mp3"]
    },
    {
        src: crab,
        name: "crab",
        sounds: ["/sounds/crab1.mp3"]
    },
    {
        src: chicken,
        name: "chicken",
        sounds: ["/sounds/chicken1.mp3", "/sounds/chicken2.mp3"]
    },
    {
        src: boar,
        name: "boar",
        sounds: ["/sounds/pig1.mp3", "/sounds/pig2.mp3"]
    },
    {
        src: cow,
        name: "cow",
        sounds: ["/sounds/cow1.mp3", "/sounds/cow2.mp3"]
    },
    {
        src: frog,
        name: "frog",
        sounds: ["/sounds/frog1.mp3", "/sounds/frog2.mp3"]
    },
    {
        src: goat,
        name: "goat",
        sounds: ["/sounds/goat1.mp3", "/sounds/goat2.mp3"]
    },
    {
        src: pig,
        name: "pig",
        sounds: ["/sounds/pig1.mp3", "/sounds/pig2.mp3"]
    },
    {
        src: rooster,
        name: "rooster",
        sounds: ["/sounds/rooster1.mp3", "/sounds/rooster2.mp3"]
    },
    {
        src: sheep,
        name: "sheep",
        sounds: ["/sounds/sheep1.mp3", "/sounds/sheep2.mp3"]
    }
];

export const getRandomAnimal = (): IAnimalInfo => {
    return getRandomFromArray(ALL_ANIMALS);
};
