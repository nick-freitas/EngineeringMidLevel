import {Container} from "inversify";

import {AppConfig} from "./app-config";
import {DbConnector} from "../db-connector";
import {Server} from "../server";
import {Routes} from "../routes/routes";
import {SimpleTestRoute} from "../routes/simple-test";
import {iocTypes} from "../ioc-types";

export const iocContainer = new Container();
export function initializeBindings () {
    iocContainer.bind<AppConfig>(iocTypes.AppConfig).to(AppConfig);
    iocContainer.bind<DbConnector>(iocTypes.DbConnector).to(DbConnector).inSingletonScope();
    iocContainer.bind<Server>(iocTypes.Server).to(Server).inSingletonScope();
    iocContainer.bind<SimpleTestRoute>(iocTypes.SimpleTestRoute).to(SimpleTestRoute);
    iocContainer.bind<Routes>(iocTypes.Routes).to(Routes);
}
