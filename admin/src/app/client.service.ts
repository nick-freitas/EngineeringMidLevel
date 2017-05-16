import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {Client} from "./client";
import {BaseService} from "./base.service";

@Injectable()
export class ClientService extends BaseService {
  private getClientListUrl: () => string;
  private getClientUrl: (id) => string;
  private createClientUrl: () => string;
  private updateClientUrl: (id) => string;
  private destroyClientUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getClientListUrl = () => `${this.baseUrl}clients`;
    this.getClientUrl = (id: number) => `${this.baseUrl}clients/${id}`;
    this.createClientUrl = () => `${this.baseUrl}clients`;
    this.updateClientUrl = (id) => `${this.baseUrl}clients/${id}`;
    this.destroyClientUrl = (id) => `${this.baseUrl}clients/${id}`;
  }

  getClientList(): Observable<Client[]> {
    return this.http.get(this.getClientListUrl())
      .map(res => {
        const resClients = res.json() || [];

        return resClients.map(client => new Client(client.id, client.name));
      })
      .catch(this.errorHandler);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get(this.getClientUrl(id))
      .map(res => {
        const resClient = res.json() || {};

        return new Client(resClient.id, resClient.name);
      })
      .catch(this.errorHandler);
  }

  createClient(client): Observable<Client> {
    return this.http.post(this.createClientUrl(), client)
      .map(res => {
        const resClient = res.json() || {};

        return new Client(resClient.id, resClient.name);
      })
      .catch(this.errorHandler);
  }

  updateClient(id, _client): Observable<Client> {
    const client = Object.assign({}, _client);
    delete client.id;

    return this.http.put(this.updateClientUrl(id), client)
      .map(res => {
        const resClient = res.json() || {};

        return new Client(resClient.id, resClient.name);
      })
      .catch(this.errorHandler);
  }

  destroyClient(id): Observable<void> {
    return this.http.delete(this.destroyClientUrl(id))
      .map(res => res.json())
      .catch(this.errorHandler);
  }
}
