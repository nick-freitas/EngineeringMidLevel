import {Controller} from "./base-controller";
import {inject, injectable} from "inversify";
import {iocTypes} from "../ioc-types";
import {ThreadService} from "../services/thread";
import * as Boom from 'boom';


@injectable()
export class ThreadController extends Controller {
    constructor(@inject(iocTypes.ThreadService) private threadService: ThreadService) {
        super(threadService);
    }

    async getManyForFeature(req, reply) {
        try {
            const records = await this.threadService.getManyForFeature(req.params.id);

            reply(records);
        } catch (err) {
            console.error(err);
            reply(Boom.badImplementation(this.internalServerErrorMessage));
        }
    }
}
