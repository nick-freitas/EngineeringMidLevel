import * as hapi from "hapi";
import {inject} from "inversify";

import {iocTypes} from "./ioc-types";
import {AppConfig} from "./config/app-config";
import {DbConnector} from "./db-connector";

/**
 * The Application
 *
 * Initializes the server, sets the routes, makes sure everything is connected properly
 */
export class App {
    server;

    constructor(@inject(iocTypes.AppConfig) private appConfig: AppConfig,
                @inject(iocTypes.DbConnector) private dbConnector: DbConnector) {
        this.server = new hapi.Server();

    }

    public async initializeServer() {
        // connect to the db
        await this.dbConnector.connection.authenticate();

        // create server
        this.setServerConnection();
        this.server.start();

        // Log success
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
