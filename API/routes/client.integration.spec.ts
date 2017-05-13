import {expect} from 'chai';
import {iocContainer, initializeBindings} from '../config/inversify.config';
import {App} from "../app";
import {iocTypes} from "../ioc-types";
import {Routes} from "./routes";
import {DbConnector} from "../db-connector";
import {Server} from "../server";

describe(`Client integration`, () => {
    let request = null;

    before(() => {
        initializeBindings();
    });

    beforeEach(async () => {
        const dbConnector = iocContainer.get<DbConnector>(iocTypes.DbConnector);
        const server = iocContainer.get<Server>(iocTypes.Server);
        const route = iocContainer.get<Routes>(iocTypes.Routes);
        const app = new App(dbConnector, server, route);
        await app.initializeApp();

        request = require('supertest')(app.server.server.listener);
    });

    it('gets all clients', async () => {
        const numberOfClientsInSeeder = 3;

        let response: any = await new Promise((resolve, reject) => {
            request.get(`/clients`).end((err, res) => {
                if (err) {
                    return reject(err);
                }

                resolve(res);
            });
        });

        expect(response.status).to.equal(200);
        expect(response.body).to.be.ok;
        expect(response.body).to.be.instanceof(Array);
        expect(response.body.length).to.equal(numberOfClientsInSeeder);
    });
});
