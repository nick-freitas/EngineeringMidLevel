import {Controller} from "./base-controller";
import {inject, injectable} from "inversify";
import {iocTypes} from "../ioc-types";
import {FeatureService} from "../services/feature";

@injectable()
export class FeatureController extends Controller {
    constructor(@inject(iocTypes.FeatureService) service: FeatureService) {
        super(service);
    }
}
