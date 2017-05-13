import * as Sequelize from "sequelize";
import {inject, injectable} from "inversify";

import {iocTypes} from "./ioc-types";
import {AppConfig} from "./config/app-config";

@injectable()
export class DbConnector {
    private _connection;

    constructor(@inject(iocTypes.AppConfig) private appConfig: AppConfig) {
    }

    get connection() {
        if (this._connection) {
            return this._connection;
        }

        const dbConnectionOptions = {
            dbName: this.appConfig.database.name,
            dbUsername: this.appConfig.database.username,
            dbPassword: this.appConfig.database.password,
            dbHost: this.appConfig.database.host,
            dbDialect: this.appConfig.database.dialect,
            dbLogging: this.appConfig.database.logging
        };

        this._connection = this.createConnection(dbConnectionOptions);
        return this._connection;
    }

    private createConnection({dbName, dbUsername, dbPassword, dbHost, dbDialect, dbLogging}) {
        return new Sequelize(dbName, dbUsername, dbPassword, {
            host: dbHost,
            dialect: dbDialect,
            logging: dbLogging
        })
    }
}
