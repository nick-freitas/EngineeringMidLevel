//import reflect metadata so we can inject in rest of application
import "reflect-metadata";

import {Container} from "inversify";

import {AppConfig} from "./app-config";
import {DbConnector} from "../db-connector";
import {Server} from "../server";
import {Routes} from "../routes/routes";
import {iocTypes} from "../ioc-types";
import {ClientService} from "../services/services";
import {ClientRoute} from "../routes/client";
import {ClientController} from "../controllers/client";
import {ClientDbSchema} from "../schema/client";
import {ClientValidator} from "../validators/client";

export const iocContainer = new Container();
export function initializeBindings() {
    iocContainer.bind<AppConfig>(iocTypes.AppConfig).to(AppConfig);
    iocContainer.bind<DbConnector>(iocTypes.DbConnector).to(DbConnector).inSingletonScope();
    iocContainer.bind<Server>(iocTypes.Server).to(Server).inSingletonScope();

    // Routes
    iocContainer.bind<Routes>(iocTypes.Routes).to(Routes);
    iocContainer.bind<ClientRoute>(iocTypes.ClientRoute).to(ClientRoute);

    // Controllers
    iocContainer.bind<ClientController>(iocTypes.ClientController).to(ClientController);

    // Validators
    iocContainer.bind<ClientValidator>(iocTypes.ClientValidator).to(ClientValidator);

    // Services
    iocContainer.bind<ClientService>(iocTypes.ClientService).to(ClientService);

    // Db Schemas
    iocContainer.bind<ClientDbSchema>(iocTypes.ClientDbSchema).to(ClientDbSchema);
}
