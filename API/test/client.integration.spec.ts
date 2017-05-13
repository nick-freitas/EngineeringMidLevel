import {expect} from 'chai';
import {iocContainer, initializeBindings} from '../config/inversify.config';
import {App} from "../app";
import {iocTypes} from "../ioc-types";
import {Routes} from "../routes/routes";
import {DbConnector} from "../db-connector";
import {Server} from "../server";

describe(`Client integration`, () => {
    let request = null;

    before(async () => {
        initializeBindings();

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
            request.get(`/clients`)
                .end((err, res) => {
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

    it('gets a single client', async () => {
        const clientId = 1;
        const clientName = "Client A";

        let response: any = await new Promise((resolve, reject) => {
            request.get(`/clients/${clientId}`)
                .end((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
        });

        expect(response.status).to.equal(200);
        expect(response.body).to.be.ok;
        expect(response.body.id).to.be.ok;
        expect(response.body.id).to.equal(clientId);
        expect(response.body.name).to.be.ok;
        expect(response.body.name).to.equal(clientName);
    });

    it('creates a client', async () => {
        const expectedClientId = 1;
        const clientName = "Client D";

        let response: any = await new Promise((resolve, reject) => {
            request.post(`/clients`)
                .send({
                    name: clientName
                })
                .end((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
        });

        expect(response.status).to.equal(201);
        expect(response.body).to.be.ok;
        expect(response.body.id).to.be.ok;
        expect(response.body.id).to.equal(expectedClientId);
        expect(response.body.name).to.be.ok;
        expect(response.body.name).to.equal(clientName);

        response = await new Promise((resolve, reject) => {
            request.get(`/clients/${expectedClientId}`)
                .end((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
        });

        expect(response.status).to.equal(200);
        expect(response.body).to.be.ok;
        expect(response.body.id).to.be.ok;
        expect(response.body.id).to.equal(expectedClientId);
        expect(response.body.name).to.be.ok;
        expect(response.body.name).to.equal(clientName);
    });

    it('updates a client', async () => {
        const clientId = 1;
        const newClientName = `Client D - ${new Date().getMilliseconds()}`;

        let response: any = await new Promise((resolve, reject) => {
            request.put(`/clients/${clientId}`)
                .send({
                    name: newClientName
                })
                .end((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
        });

        expect(response.status).to.equal(201);
        expect(response.body).to.be.ok;
        expect(response.body.id).to.be.ok;
        expect(response.body.id).to.equal(clientId);
        expect(response.body.name).to.be.ok;
        expect(response.body.name).to.equal(newClientName);

        response = await new Promise((resolve, reject) => {
            request.get(`/clients/${clientId}`)
                .end((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
        });

        expect(response.status).to.equal(200);
        expect(response.body).to.be.ok;
        expect(response.body.id).to.be.ok;
        expect(response.body.id).to.equal(clientId);
        expect(response.body.name).to.be.ok;
        expect(response.body.name).to.equal(newClientName);
    });

    it('delete a client', async () => {
        const clientId = 3;

        let response: any = await new Promise((resolve, reject) => {
            request.delete(`/clients/${clientId}`)
                .end((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
        });

        expect(response.status).to.equal(200);
        expect(response.body).to.be.ok;
        expect(response.body.id).to.be.ok;
        expect(response.body.id).to.equal(clientId);
        expect(response.body.name).to.be.ok;

        response = await new Promise((resolve, reject) => {
            request.get(`/clients/${clientId}`)
                .end((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
        });

        expect(response.status).to.equal(404);
    });

});
