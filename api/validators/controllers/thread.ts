import {Controller} from "./base-controller";
import {inject, injectable} from "inversify";
import {iocTypes} from "../ioc-types";
import {ThreadService} from "../services/thread";

@injectable()
export class ThreadController extends Controller {
    constructor(@inject(iocTypes.ThreadService) service: ThreadService) {
        super(service);
    }
}
