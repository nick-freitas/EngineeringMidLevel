import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {Client} from "./client";
import {BaseService} from "./base.service";

@Injectable()
export class ClientService extends BaseService<Client> {
  constructor(http: Http) {
    super(http);
  }

  getListUrl() {
    return `${this.baseUrl}clients`;
  }

  getOneUrl(id: number): string {
    return `${this.baseUrl}clients/${id}`;
  }

  updateUrl(id: number): string {
    return `${this.baseUrl}clients/${id}`;
  }

  createUrl(): string {
    return `${this.baseUrl}clients`;
  }

  destroyUrl(id: number): string {
    return `${this.baseUrl}clients/${id}`;
  }

  createNewInstance(client): Client {
    return new Client(client.id, client.name);
  }
}
