import {injectable} from "inversify";

@injectable()
export class AppConfig {
    server: ServerConfig;

    constructor(){
        this.initializeServer();
    }

    private initializeServer() {
        const host = `localhost`;
        let portNumber = 3000;

        const environmentPortNumber = parseInt(process.env.PORT);
        if(!isNaN(environmentPortNumber) && environmentPortNumber > 0){
            portNumber = environmentPortNumber;
        }

        this.server = {
            portNumber: portNumber,
            host: host
        };
    }
}

interface ServerConfig{
    portNumber,
    host
}
