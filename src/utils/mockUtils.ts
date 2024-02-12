/**
 * @param {number} ms delay of resolve this expression
 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {T[]} arr array of objects, must be an array
 * @param {number} n number of positive elements to return
 * @param {number} msDelay delay of the response in ms, configured to 2000 ms (2seg) by default
 * @returns an array of objects
 */
export const pickRandomItemsAsync = async <T>(arr: T[], n: number, msDelay = 2000): Promise<T[]> => {
    await sleep(msDelay);
    return pickRandomItemsSync(arr, n);
};

/**
 * @param {T[]} arr array of objects, must be an array
 * @param {number} n number of positive elements to return
 * @returns an array of objects
 */
export const pickRandomItemsSync = <T>(arr: T[], n: number): T[] => {
    const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
    return Array.isArray(arr) ? shuffled.slice(0, n) : [];
};

/**
 * @param {number} min min number to return
 * @param {number} max max number to return
 * @returns a random integer number between predefined min and max
 */
export const getRandomBetweenNumbers = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};
// documenta el metodo generateGuid
/**
 * @returns a random guid
 * @description generates a random guid
 * @example
 * const guid = generateGuid();
 * console.log(guid);
 *
 * // output: 1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p
 *
 * */
export const generateGuid = (): string => {
    const hexChars = '0123456789abcdef';
    let guid = '';
    for (let i = 0; i < 32; i++) {
        const hexIndex = Math.floor(Math.random() * 16);
        guid += hexChars[hexIndex];
        if (i === 7 || i === 11 || i === 15 || i === 19) {
            guid += '-';
        }
    }
    return guid;
};

export const emptyFunction = () => {};
