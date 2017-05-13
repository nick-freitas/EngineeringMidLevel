import {Route} from "./base-route";
import {inject, injectable} from "inversify";
import {Server} from "../server";
import {iocTypes} from "../ioc-types";

@injectable()
export class SimpleTestRoute extends Route {
    constructor(@inject(iocTypes.Server) server: Server) {
        super(server);
    }

    addRoutes(): void {
        this.server.route({
            method: 'GET',
            path: `/`,
            handler: (req, reply) => {
                console.log('route set');
                reply(`Hello World!`);
            }
        })
    }
}
