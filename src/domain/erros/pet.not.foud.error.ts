import { CustomError } from "./custom.errors";

export default class PetNotFoundError extends CustomError {
    constructor() {
        super('Pet NOT Found', '0001');
    }
}