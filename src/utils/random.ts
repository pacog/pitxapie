export function getRandomFromArray<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

interface IItemWithWeight<T> {
    value: T;
    weight: number;
}

export function getRandomFromArrayWithWeights<T>(
    array: IItemWithWeight<T>[]
): T {
    const totalWeight = array.reduce((acc, { weight }) => acc + weight, 0);
    const random = Math.random() * totalWeight;
    let prevWeight = 0;
    for (const itemWithWeight of array) {
        prevWeight += itemWithWeight.weight;
        if (random <= prevWeight) {
            return itemWithWeight.value;
        }
    }
    throw new Error("getRandomFromArrayWithWeights, out of bounds");
}

export const getRandomWithLimits = (min: number, max: number) => {
    return min + Math.random() * (max - min);
};
