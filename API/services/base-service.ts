import {injectable} from "inversify";
import {DbSchema} from "../schema/db-schema";
import * as assert from "assert";

@injectable()
export abstract class Service {
    constructor(protected dbSchema: DbSchema) {
    }

    /**
     * Get many (all at the moment) records from the database
     *
     * @returns {Promise<any[]>}
     */
    async getMany(): Promise<any[]> {
        return this.dbSchema.schema.findAll();
    }

    /**
     * Gets a record from the database
     *
     * @param id
     * @returns {any}
     */
    async getOne(id): Promise<any> {
        assert(id, `Called getOne with no id`);

        return this.dbSchema.schema.findOne({where: {id: id}});
    }

    /**
     * Creates a record in db
     *
     * @param args
     * @returns {Promise<void>}
     */
    async create(args): Promise<any> {
        assert(args, `Called create with no args`);

        return this.dbSchema.schema.create(args);
    }

    /**
     * Destroys a record in database
     * @param id
     * @returns {Promise<void>}
     */
    async destroy(id): Promise<any> {
        assert(id, `Called destroy with no id`);

        return this.dbSchema.schema.destroy({where: {id: id}});
    }
}
