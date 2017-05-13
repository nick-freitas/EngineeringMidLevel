import {inject, injectable} from "inversify";

import {iocTypes} from "../ioc-types";
import {Route} from "./base-route";

@injectable()
export class Routes {
    constructor(@inject(iocTypes.SimpleTestRoute) private simpleTestRoute: Route) {
    }

    public addAllRoutes() {
        this.simpleTestRoute.addRoutes();
    }
}
