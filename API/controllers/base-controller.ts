import {injectable} from "inversify";
import {Service} from "../services/base-service";

@injectable()
export abstract class Controller {
    constructor(protected service: Service) {
    }

    getMany(req, reply) {
        let response = this.service.getMany(req.body);
        reply(response);
    }

    getOne(req, reply) {
        let response = this.service.getOne(req.params.id);
        reply(response);
    }
}
