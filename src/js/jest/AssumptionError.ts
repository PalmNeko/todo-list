

export class AssumptionError extends Error {
    constructor(message?: string | undefined) {
        super('AssumptionError: ' + message);
    }

    static assertDefined<T>(value: T | undefined, message: string): asserts value is T {
        if (value == undefined) {
            throw new AssumptionError(message);
        }
    }
}