import * as hapi from "hapi";
import {inject, injectable} from "inversify";

import {AppConfig} from "./config/app-config";
import {iocTypes} from "./ioc-types";

@injectable()
export class Server {
    server;

    constructor(@inject(iocTypes.AppConfig) private appConfig: AppConfig) {
        this.server = new hapi.Server();
    }

    public async initializeServer() {
        // start the server server
        this.setServerConnection();
        this.server.start();
    }

    private setServerConnection() {
        this.server.connection({
            host: this.appConfig.server.host,
            port: this.appConfig.server.portNumber
        });
    }


}