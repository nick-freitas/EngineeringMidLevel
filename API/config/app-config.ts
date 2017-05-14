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
            name: process.env.RDS_DB_NAME,
            username: process.env.RDS_USERNAME,
            password: process.env.RDS_PASSWORD,
            host: process.env.RDS_HOSTNAME,
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
