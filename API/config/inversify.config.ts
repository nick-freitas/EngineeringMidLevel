//import reflect metadata so we can inject in rest of application
import "reflect-metadata";

import {Container} from "inversify";

import {AppConfig} from "./app-config";
import {DbConnector} from "../db-connector";
import {Server} from "../server";
import {Routes} from "../routes/routes";
import {iocTypes} from "../ioc-types";
import {ClientService} from "../services/client";
import {ClientRoute} from "../routes/client";
import {ClientController} from "../controllers/client";
import {ClientDbSchema} from "../schema/client";
import {ClientValidator} from "../validators/client";
import {ProductAreaRoute} from "../routes/product-area";
import {ProductAreaController} from "../controllers/product-area";
import {ProductAreaValidator} from "../validators/product-area";
import {ProductAreaService} from "../services/product-area";
import {ProductAreaDbSchema} from "../schema/product-area";

export const iocContainer = new Container();
export function initializeBindings() {
    iocContainer.bind<AppConfig>(iocTypes.AppConfig).to(AppConfig);
    iocContainer.bind<DbConnector>(iocTypes.DbConnector).to(DbConnector).inSingletonScope();
    iocContainer.bind<Server>(iocTypes.Server).to(Server).inSingletonScope();

    // Routes
    iocContainer.bind<Routes>(iocTypes.Routes).to(Routes);

    // Client
    iocContainer.bind<ClientRoute>(iocTypes.ClientRoute).to(ClientRoute);
    iocContainer.bind<ClientController>(iocTypes.ClientController).to(ClientController);
    iocContainer.bind<ClientValidator>(iocTypes.ClientValidator).to(ClientValidator);
    iocContainer.bind<ClientService>(iocTypes.ClientService).to(ClientService);
    iocContainer.bind<ClientDbSchema>(iocTypes.ClientDbSchema).to(ClientDbSchema);

    // ProductArea
    iocContainer.bind<ProductAreaRoute>(iocTypes.ProductAreaRoute).to(ProductAreaRoute);
    iocContainer.bind<ProductAreaController>(iocTypes.ProductAreaController).to(ProductAreaController);
    iocContainer.bind<ProductAreaValidator>(iocTypes.ProductAreaValidator).to(ProductAreaValidator);
    iocContainer.bind<ProductAreaService>(iocTypes.ProductAreaService).to(ProductAreaService);
    iocContainer.bind<ProductAreaDbSchema>(iocTypes.ProductAreaDbSchema).to(ProductAreaDbSchema);
}
