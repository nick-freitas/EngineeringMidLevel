import {Controller} from "./base-service";
import {inject, injectable} from "inversify";
import {iocTypes} from "../ioc-types";

@injectable()
export class ClientController extends Controller {
    constructor(@inject(iocTypes.ClientService) service: ClientService) {
        super(service);
    }
}
