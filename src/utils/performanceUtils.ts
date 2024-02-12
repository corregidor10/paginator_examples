/**
 * Measures the time it takes for a function to execute.
 * @param func The function to measure.
 * @param numExecutions The number of times to execute the function.
 * @returns The sum of the execution time of the function in milliseconds.
 */

export function measureFunctionTime(func: () => void, numExecutions: number): number {
    let totalTime = 0;
    for (let i = 0; i < numExecutions; i++) {
        const startTime = performance.now();
        func();
        const endTime = performance.now();
        totalTime += endTime - startTime;
    }
    return totalTime;
}
