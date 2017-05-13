import {Container} from "inversify";
import {iocTypes} from "../ioc-types";
import {AppConfig} from "./app-config";
import {DbConnector} from "../db-connector";

export const iocContainer = new Container();
export function initializeBindings () {
    iocContainer.bind<AppConfig>(iocTypes.AppConfig).to(AppConfig);
    iocContainer.bind<DbConnector>(iocTypes.DbConnector).to(DbConnector);
}
