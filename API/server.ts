import * as hapi from "hapi";
import * as good from 'good';
import {inject, injectable} from "inversify";

import {AppConfig} from "./config/app-config";
import {iocTypes} from "./ioc-types";

@injectable()
export class Server {
    private _server;

    constructor(@inject(iocTypes.AppConfig) private appConfig: AppConfig) {
    }

    get server() {
        if (this._server) {
            return this._server;
        }

        this._server = new hapi.Server();
        return this._server;
    }

    public async initializeServer() {
        //set connection
        this.server.connection({
            host: this.appConfig.server.host,
            port: this.appConfig.server.portNumber
        });

        // add logging
        await this.registerLogger();

        // start the server server
        return new Promise((resolve, reject) => this.server.start(err => {
            if (err) {
                return reject(err);
            }

            resolve();
        }));
    }

    /**
     * Adds logging to stdout for responses
     * @returns {Promise<T>}
     */
    private async registerLogger() {
        return new Promise((resolve, reject) => this.server.register({
            register: good,
            options: {
                reporters: {
                    myConsoleReporter: [{
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{log: '*', response: '*'}]
                    }, {
                        module: 'good-console'
                    }, 'stdout']
                }
            }
        }, err => {
            if (err) {
                return reject(err);
            }

            resolve();
        }));
    }
}
