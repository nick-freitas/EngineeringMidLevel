import {Controller} from "./base-controller";
import {inject, injectable} from "inversify";
import {iocTypes} from "../ioc-types";
import {FeatureService} from "../services/feature";
import * as Boom from "boom";

@injectable()
export class FeatureController extends Controller {
    constructor(@inject(iocTypes.FeatureService) private featureService: FeatureService) {
        super(featureService);
    }

    async close(req, reply) {
        try {
            const id = req.params.id;
            let record = await this.service.getOne(id);

            if (!record) {
                return reply(Boom.notFound(`Record not found`));
            }

            if (record.status !== 'OPEN') {
                return reply(Boom.badRequest(`Record isn't open`));
            }

            record = await this.featureService.close(id);

            reply(record);
        } catch (err) {
            console.error(err);
            reply(Boom.badImplementation(this.internalServerErrorMessage));
        }
    }
}
