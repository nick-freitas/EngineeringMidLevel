//import reflect metadata so we can inject in rest of application
import "reflect-metadata";

import {initializeBindings, iocContainer} from "./config/inversify.config";
import {App} from "./app";
import {iocTypes} from "./ioc-types";
import {AppConfig} from "./config/app-config";
import {DbConnector} from "./db-connector";

// initialize the ioc bindings so we can inject properly
initializeBindings();

// create instance of app and inject dependencies
const appConfig = iocContainer.get<AppConfig>(iocTypes.AppConfig);
const dbConnector = iocContainer.get<DbConnector>(iocTypes.DbConnector);
const app = new App(appConfig, dbConnector);

// initialize app
app.initializeServer()
    .catch((err) => {
    // if there is an uncaught error log it and exit the application
        // NOTE: exiting an application is really bad but this isn't gonna happen unless something really really catastrophic happens, at which point out best bet is to kill this node process and alert the process manager running it that we did. The manager will the take care of running a new process so we have no down time
        console.error(err);
        process.exit(-1);
    });