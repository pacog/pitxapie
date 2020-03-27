import { Howl } from "howler";

export const playSound = (soundUrl: string): Promise<void> => {
    return new Promise(resolve => {
        const sound = new Howl({
            src: soundUrl
        });

        sound.on("end", function() {
            resolve();
        });

        sound.play();
    });
};
