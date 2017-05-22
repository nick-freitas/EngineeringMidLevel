import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {Client} from "./client";
import {BaseService} from "./base.service";
import {Observable} from "rxjs/Observable";

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

  createNewInstance(client): Client {
    return new Client(client.id, client.name);
  }

  update(_, __): Observable<Client> {
    throw new Error(`Cannot update client from this interface`);
  }

  create(_): Observable<Client> {
    throw new Error(`Cannot update client from this interface`);
  }

  destroy(_): Observable<void> {
    throw new Error(`Cannot update client from this interface`);
  }

  updateUrl(id: number): string {
    return undefined;
  }

  createUrl(): string {
    return undefined;
  }

  destroyUrl(id: number): string {
    return undefined;
  }
}
