import {expect} from 'chai';

import {iocContainer, initializeBindings} from '../config/inversify.config';
import {App} from "../app";
import {iocTypes} from "../ioc-types";

describe(`Feature integration`, () => {
    let request = null;

    before(async () => {
        initializeBindings();

        const app = iocContainer.get<App>(iocTypes.App);
        await app.initializeApp();

        request = require('supertest')(app.server.server.listener);
    });

    it('gets all features', async () => {
        let response: any = await new Promise((resolve, reject) => {
            request.get(`/features`)
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
        expect(response.body).to.not.be.empty;
    });

    // it('gets a single feature', async () => {
    //     const featureId = 2;
    //     const featureTitle = "Test Feature 2";
    //     const featureDescription = "This is a test feature";
    //     const featureClientPriority = 1;
    //     const featureClient = 2;
    //     const featureTicketUrl = `http://not.a.fake.address/seriously-this-is-real`;
    //
    //     let response: any = await new Promise((resolve, reject) => {
    //         request.get(`/features/${featureId}`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 200`).to.equal(200);
    //     expect(response.body, `Body is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ${featureId}`).to.equal(featureId);
    //
    //     expect(response.body.title, `Title is not ok`).to.be.ok;
    //     expect(response.body.title, `Title is not ${featureTitle}`).to.equal(featureTitle);
    //     expect(response.body.description, `Description is not ok`).to.be.ok;
    //     expect(response.body.description, `Description is not ${featureDescription}`).to.equal(featureDescription);
    //     expect(response.body.clientPriority, `Client priority is not ok`).to.be.ok;
    //     expect(response.body.clientPriority, `Client priority is not ${featureClientPriority}`).to.equal(featureClientPriority);
    //     expect(response.body.client, `Client is not ok`).to.be.ok;
    //     expect(response.body.client, `Client is not ${featureClient}`).to.equal(featureClient);
    //     expect(response.body.ticketUrl, `Ticket url is not ok`).to.be.ok;
    //     expect(response.body.ticketUrl, `Ticket url is not ${featureTicketUrl}`).to.equal(featureTicketUrl);
    // });

    // it('creates a feature', async () => {
    //     const featureTitle = `Test Feature ${new Date().getMilliseconds()}`;
    //     const featureDescription = "This is a test feature";
    //     const featureClientPriority = 1;
    //     const featureClient = 2;
    //     const featureTargetDate = new Date();
    //     featureTargetDate.setFullYear(featureTargetDate.getFullYear() + 1);;
    //     const featureTicketUrl = `http://testurl.com/${new Date().getMilliseconds()}`;
    //     const featureProductArea = 2;
    //
    //     let response: any = await new Promise((resolve, reject) => {
    //         request.post(`/features`)
    //             .send({
    //                 title: featureTitle,
    //                 description: featureDescription,
    //                 clientPriority: featureClientPriority,
    //                 client: featureClient,
    //                 ticketUrl: featureTicketUrl,
    //                 targetDate: featureTargetDate.toISOString(),
    //                 productArea: featureProductArea
    //             })
    //             .set('Accept', 'application/json')
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 201`).to.equal(201);
    //     expect(response.body, `Body is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ok`).to.be.ok;
    //
    //     expect(response.body.title, `Title is not ok`).to.be.ok;
    //     expect(response.body.title, `Title is not ${featureTitle}`).to.equal(featureTitle);
    //     expect(response.body.description, `Description is not ok`).to.be.ok;
    //     expect(response.body.description, `Description is not ${featureDescription}`).to.equal(featureDescription);
    //     expect(response.body.clientPriority, `Client priority is not ok`).to.be.ok;
    //     expect(response.body.clientPriority, `Client priority is not ${featureClientPriority}`).to.equal(featureClientPriority);
    //     expect(response.body.client, `Client is not ok`).to.be.ok;
    //     expect(response.body.client, `Client is not ${featureClient}`).to.equal(featureClient);
    //     expect(response.body.ticketUrl, `Ticket url is not ok`).to.be.ok;
    //     expect(response.body.ticketUrl, `Ticket url is not ${featureTicketUrl}`).to.equal(featureTicketUrl);
    //     expect(response.body.targetDate, `Target date is not ok`).to.be.ok;
    //     expect(response.body.targetDate, `Target date is not ${featureTargetDate.toISOString()}`).to.equal(featureTargetDate.toISOString());
    //     expect(response.body.productArea, `Product area is not ok`).to.be.ok;
    //     expect(response.body.productArea, `Product area is not ${featureProductArea}`).to.equal(featureProductArea);
    //
    //     const featureId = response.body.id;
    //
    //     response = await new Promise((resolve, reject) => {
    //         request.get(`/features/${featureId}`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 200`).to.equal(200);
    //     expect(response.body, `Body is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ${featureId}`).to.equal(featureId);
    //
    //     expect(response.body.title, `Title is not ok`).to.be.ok;
    //     expect(response.body.title, `Title is not ${featureTitle}`).to.equal(featureTitle);
    //     expect(response.body.description, `Description is not ok`).to.be.ok;
    //     expect(response.body.description, `Description is not ${featureDescription}`).to.equal(featureDescription);
    //     expect(response.body.clientPriority, `Client priority is not ok`).to.be.ok;
    //     expect(response.body.clientPriority, `Client priority is not ${featureClientPriority}`).to.equal(featureClientPriority);
    //     expect(response.body.client, `Client is not ok`).to.be.ok;
    //     expect(response.body.client, `Client is not ${featureClient}`).to.equal(featureClient);
    //     expect(response.body.ticketUrl, `Ticket url is not ok`).to.be.ok;
    //     expect(response.body.ticketUrl, `Ticket url is not ${featureTicketUrl}`).to.equal(featureTicketUrl);
    //     expect(response.body.targetDate, `Target date is not ok`).to.be.ok;
    //     expect(new Date(response.body.targetDate).toDateString(), `Target date is not ${featureTargetDate.toISOString()}`).to.equal(featureTargetDate.toDateString());
    //     expect(response.body.productArea, `Product area is not ok`).to.be.ok;
    //     expect(response.body.productArea, `Product area is not ${featureProductArea}`).to.equal(featureProductArea);
    // });

    /*NOT DONE BELOW HERE*/
    // it('updates a feature', async () => {
    //     const featureId = 1;
    //     const newFeatureName = `Feature E - ${new Date().getMilliseconds()}`;
    //
    //     let response: any = await new Promise((resolve, reject) => {
    //         request.put(`/features/${featureId}`)
    //             .send({
    //                 name: newFeatureName
    //             })
    //             .set('Accept', 'application/json')
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 200`).to.equal(200);
    //     expect(response.body, `Body is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ${featureId}`).to.equal(featureId);
    //     expect(response.body.name, `Name is not ok`).to.be.ok;
    //     expect(response.body.name, `Name is not ${newFeatureName}`).to.equal(newFeatureName);
    //
    //     response = await new Promise((resolve, reject) => {
    //         request.get(`/features/${featureId}`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 200`).to.equal(200);
    //     expect(response.body, `Body is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ok`).to.be.ok;
    //     expect(response.body.id, `Id is not ${featureId}`).to.equal(featureId);
    //     expect(response.body.name, `Name is not ok`).to.be.ok;
    //     expect(response.body.name, `Name is not ${newFeatureName}`).to.equal(newFeatureName);
    // });

    // it('delete a feature', async () => {
    //     let response: any = await new Promise((resolve, reject) => {
    //         request.post(`/features`)
    //             .send({
    //                 name: `Feature F - ${new Date().getMilliseconds()}`
    //             })
    //             .set('Accept', 'application/json')
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     const featureId = response.body.id;
    //
    //     response = await new Promise((resolve, reject) => {
    //         request.delete(`/features/${featureId}`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 200`).to.equal(200);
    //     expect(response.body, `Body is not ok`).to.be.ok;
    //
    //     response = await new Promise((resolve, reject) => {
    //         request.get(`/features/${featureId}`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Response is not 404`).to.equal(404);
    // });

    // it('fails to update a feature because there is no name', async () => {
    //     const featureId = 1;
    //
    //     let response: any = await new Promise((resolve, reject) => {
    //         request.put(`/features/${featureId}`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 400`).to.equal(400);
    // });

    // it('fails to create a feature because there is no name', async () => {
    //     let response: any = await new Promise((resolve, reject) => {
    //         request.post(`/features`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 400`).to.equal(400);
    // });

    // it('fails to get one because id is bad', async () => {
    //     const response: any = await new Promise((resolve, reject) => {
    //         request.get(`/features/undefined`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 400`).to.equal(400);
    // });

    // it('fails to delete because id is bad', async () => {
    //     const response: any = await new Promise((resolve, reject) => {
    //         request.delete(`/features/undefined`)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //
    //                 resolve(res);
    //             });
    //     });
    //
    //     expect(response.status, `Status is not 400`).to.equal(400);
    // });
});
