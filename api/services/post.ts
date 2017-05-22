import {inject, injectable} from "inversify";

import {Service} from "./base-service";
import {iocTypes} from "../ioc-types";
import {PostDbSchema} from "../schema/post";

@injectable()
export class PostService extends Service {
    constructor(@inject(iocTypes.PostDbSchema) postDbSchema: PostDbSchema) {
        super(postDbSchema);
    }

    async getManyForThread(id): Promise<any[]>{
        return this.dbSchema.schema.findAll({
            where: {thread: id},
            order: [
                ['createdAt', 'DESC']
            ]
        });
    }
}
