import {injectable} from "inversify";
import {Service} from "../services/base-service";

@injectable()
export abstract class Controller {
    constructor(protected service: Service) {
    }

    async getMany(req, reply) {
        try {
            let response = await this.service.getMany();

            reply(response);
        } catch (err) {
            console.error(err);
        }
    }

    getOne(req, reply) {
        let response = this.service.getOne(req.params.id);
        reply(response);
    }
}
