import {injectable} from "inversify";
import {DbSchema} from "../schema/db-schema";

@injectable()
export abstract class Service {
    constructor(protected dbSchema: DbSchema) {
    }

    async getMany() {
        return this.dbSchema.schema.findAll();
    }

    async getOne(id) {
        return `42 - ${id}`;
    }
}
