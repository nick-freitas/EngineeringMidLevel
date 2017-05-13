import * as hapi from "hapi";
import {inject} from "inversify";

import {iocTypes} from "./ioc-types";
import {AppConfig} from "./app-config";

/**
 * The Application
 *
 * Initializes the server, sets the routes, makes sure everything is connected properly
 */
export class App {
    server;

    constructor(@inject(iocTypes.AppConfig) private appConfig:AppConfig) {
        this.server = new hapi.Server();
    }

    public async initializeServer() {
        this.setServerConnection();

        this.server.start();

        console.info(`Started server at ${JSON.stringify(this.server.info.uri)}`);
        console.info(`Environment: ${process.env.NODE_ENV}`);
    }

    private setServerConnection() {
        this.server.connection({
            host: this.appConfig.server.host,
            port: this.appConfig.server.portNumber
        });
    }
}
