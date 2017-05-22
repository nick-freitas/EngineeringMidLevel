import {inject, injectable} from "inversify";
import * as Boom from 'boom';

import {Controller} from "./base-controller";
import {iocTypes} from "../ioc-types";
import {PostService} from "../services/post";

@injectable()
export class PostController extends Controller {
    constructor(@inject(iocTypes.PostService) private postService: PostService) {
        super(postService);
    }

    async getManyForThread(req, reply) {
        try {
            const records = await this.postService.getManyForThread(req.params.id);

            reply(records);
        } catch (err) {
            console.error(err);
            reply(Boom.badImplementation(this.internalServerErrorMessage));
        }
    }
}
