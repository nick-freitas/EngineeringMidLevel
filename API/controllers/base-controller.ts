import {injectable} from "inversify";
import * as Boom from 'boom';

import {Service} from "../services/base-service";

@injectable()
export abstract class Controller {
    private internalServerErrorMessage: string;

    constructor(protected service: Service) {
        this.internalServerErrorMessage = `An unknown error has occurred. If this persists, please contact your administrator`;
    }

    async getMany(req, reply) {
        try {
            let response = await this.service.getMany();

            reply(response);
        } catch (err) {
            console.error(err);
            reply(Boom.badImplementation(this.internalServerErrorMessage));
        }
    }

    async getOne(req, reply) {
        try {
            let response = await this.service.getOne(req.params.id);

            reply(response);
        } catch (err) {
            console.error(err);
            reply(Boom.badImplementation(this.internalServerErrorMessage));
        }
    }

    async create(req, reply) {
        try {
            let response = await this.service.create(req.payload);

            reply(response).code(201);
        } catch (err) {
            console.error(err);
            reply(Boom.badImplementation(this.internalServerErrorMessage));
        }
    }
}
