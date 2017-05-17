import {Route} from "./base-route";
import {inject, injectable} from "inversify";
import {Server} from "../server";
import {iocTypes} from "../ioc-types";
import {ProductAreaController} from "../controllers/product-area";
import {ProductAreaValidator} from "../validators/product-area";

@injectable()
export class ProductAreaRoute extends Route {
    constructor(@inject(iocTypes.Server) server: Server,
                @inject(iocTypes.ProductAreaController) private clientController: ProductAreaController,
                @inject(iocTypes.ProductAreaValidator) private clientValidator: ProductAreaValidator) {
        super(server);
    }

    addRoutes(): void {
        this.server.route({
            method: 'GET',
            path: `/product-areas`,
            handler: (req, reply) => this.clientController.getMany(req, reply)
        });

        this.server.route({
            method: 'GET',
            path: `/product-areas/{id}`,
            handler: (req, reply) => this.clientController.getOne(req, reply),
            config: {
                validate: this.clientValidator.getOneValidation()
            }
        });

        this.server.route({
            method: 'DELETE',
            path: `/product-areas/{id}`,
            handler: (req, reply) => this.clientController.destroy(req, reply),
            config: {
                validate: this.clientValidator.destroyValidation()
            }
        });

        this.server.route({
            method: 'POST',
            path: `/product-areas`,
            handler: (req, reply) => this.clientController.create(req, reply),
            config: {
                validate: this.clientValidator.createValidation()
            }
        });

        this.server.route({
            method: 'PUT',
            path: `/product-areas/{id}`,
            handler: (req, reply) => this.clientController.update(req, reply),
            config: {
                validate: this.clientValidator.updateValidation()
            }
        });
    }
}
