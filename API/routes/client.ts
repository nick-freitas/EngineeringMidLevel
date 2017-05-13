import {Route} from "./base-route";
import {inject, injectable} from "inversify";
import {Server} from "../server";
import {iocTypes} from "../ioc-types";

@injectable()
export class ClientRoute extends Route {
    constructor(@inject(iocTypes.Server) server: Server,
                @inject(iocTypes.Server) private clientController: ClientController) {
        super(server);
    }

    addRoutes(): void {
        this.server.route({
            method: 'GET',
            path: `/clients`,
            handler: this.clientController.getMany
        });

        this.server.route({
            method: 'GET',
            path: `/clients/{id}`,
            handler: this.clientController.getOne
        });
    }
}
