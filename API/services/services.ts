import {Service} from "./base-service";
import {injectable} from "inversify";

@injectable()
export class ClientService extends Service {
    constructor() {
        super();
    }
}
