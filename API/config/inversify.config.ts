import {Container} from "inversify";

import {iocTypes} from "../ioc-types";
import {AppConfig} from "./app-config";
import {DbConnector} from "../db-connector";
import {Server} from "../server";

export const iocContainer = new Container();
export function initializeBindings () {
    iocContainer.bind<AppConfig>(iocTypes.AppConfig).to(AppConfig);
    iocContainer.bind<DbConnector>(iocTypes.DbConnector).to(DbConnector);
    iocContainer.bind<Server>(iocTypes.Server).to(Server);
}
