import {Route} from "./base-route";
import {inject, injectable} from "inversify";
import {Server} from "../server";
import {iocTypes} from "../ioc-types";
import {ClientController} from "../controllers/client";

@injectable()
export class ClientRoute extends Route {
    constructor(@inject(iocTypes.Server) server: Server,
                @inject(iocTypes.ClientController) private clientController: ClientController) {
        super(server);
    }

    addRoutes(): void {
        this.server.route({
            method: 'GET',
            path: `/clients`,
            handler: (req, reply) => this.clientController.getMany(req, reply)
        });

        this.server.route({
            method: 'GET',
            path: `/clients/{id}`,
            handler: (req, reply) => this.clientController.getOne(req, reply)
        });
    }
}
