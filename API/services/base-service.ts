import {injectable} from "inversify";

@injectable()
export abstract class Service {
    constructor() {
    }

    async getMany() {
        return [42, 42, 42];
    }

    async getOne(id) {
        return `42 - ${id}`;
    }
}
