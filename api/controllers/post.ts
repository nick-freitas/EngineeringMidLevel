import {Controller} from "./base-controller";
import {inject, injectable} from "inversify";
import {iocTypes} from "../ioc-types";
import {PostService} from "../services/post";

@injectable()
export class PostController extends Controller {
    constructor(@inject(iocTypes.PostService) service: PostService) {
        super(service);
    }
}
