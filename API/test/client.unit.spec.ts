import {expect} from 'chai';

import {initializeBindings} from "../config/inversify.config";
import {ClientService} from "../services/services";

describe(`Client unit`, () => {
    let service: ClientService = null;

    before(async () => {
        initializeBindings();
    });

    beforeEach(async () => {
        service = new ClientService();
    });

    it('gets many', async () => {
        let clients = await service.getMany();

        expect(clients).to.be.ok;
        expect(clients).to.be.instanceof(Array);
        expect(clients).to.not.be.empty;
    });

    it('gets a single client', async () => {
        const clientId = 1;
        const expectedClientName = 'Client A';

        let client: any = await service.getOne(clientId);

        expect(client).to.be.ok;
        expect(client.id).to.equal(clientId);
        expect(client.name).to.equal(expectedClientName);
    });
});
