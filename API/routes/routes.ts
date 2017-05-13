import {inject, injectable} from "inversify";

import {iocTypes} from "../ioc-types";
import {Route} from "./base-route";

@injectable()
export class Routes {
    constructor(@inject(iocTypes.ClientRoute) private clientRoute: Route) {
    }

    public addAllRoutes() {
        this.clientRoute.addRoutes();
    }
}
