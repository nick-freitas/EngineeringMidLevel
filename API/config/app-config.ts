import {injectable} from "inversify";

@injectable()
export class AppConfig {
    server: ServerConfig;
    database: DatabaseConfig;

    constructor() {
        this.initializeServer();
        this.initializeDatabse();
    }

    private initializeServer() {
        const host = `localhost`;
        let portNumber = 3000;

        const environmentPortNumber = parseInt(process.env.PORT);
        if (!isNaN(environmentPortNumber) && environmentPortNumber > 0) {
            portNumber = environmentPortNumber;
        }

        this.server = {
            portNumber: portNumber,
            host: host
        };
    }

    private initializeDatabse() {
        this.database = {
            name: process.env.RAFR_DB_NAME,
            username: process.env.RAFR_DB_USERNAME,
            password: process.env.RAFR_DB_PASSWORD,
            host: process.env.RAFR_DB_HOST,
            dialect: "mysql",
            logging: console.log,
        };
    }
}

interface ServerConfig {
    portNumber,
    host
}

interface DatabaseConfig {
    name,
    username,
    password,
    host,
    dialect,
    logging
}
