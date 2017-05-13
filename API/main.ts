import {initializeBindings, iocContainer} from "./config/inversify.config";
import {App} from "./app";
import {DbConnector} from "./db-connector";
import {Server} from "./server";
import {Routes} from "./routes/routes";
import {iocTypes} from "./ioc-types";

// initialize the ioc bindings so we can inject properly
initializeBindings();

// create instance of app and inject dependencies
const dbConnector = iocContainer.get<DbConnector>(iocTypes.DbConnector);
const server = iocContainer.get<Server>(iocTypes.Server);
const routes = iocContainer.get<Routes>(iocTypes.Routes);
const app = new App(dbConnector, server, routes);

// initialize app
app.initializeApp()
    .catch((err) => {
    // if there is an uncaught error log it and exit the application
        // NOTE: exiting an application is really bad but this isn't gonna happen unless something really really catastrophic happens, at which point out best bet is to kill this node process and alert the process manager running it that we did. The manager will the take care of running a new process so we have no down time
        console.error(err);
        process.exit(-1);
    });