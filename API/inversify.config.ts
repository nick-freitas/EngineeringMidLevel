import {Container} from "inversify";
import {iocTypes} from "./ioc-types";
import {AppConfig} from "./app-config";

export const iocContainer = new Container();
export function initializeBindings () {
    iocContainer.bind<AppConfig>(iocTypes.AppConfig).to(AppConfig);
}
