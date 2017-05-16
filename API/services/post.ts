import {inject, injectable} from "inversify";

import {Service} from "./base-service";
import {iocTypes} from "../ioc-types";
import {PostDbSchema} from "../schema/post";

@injectable()
export class PostService extends Service {
    constructor(@inject(iocTypes.PostDbSchema) postDbSchema: PostDbSchema) {
        super(postDbSchema);
    }
}
