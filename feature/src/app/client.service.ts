import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {Client} from "./client";
import {BaseService} from "./base.service";

@Injectable()
export class ClientService extends BaseService {
  private getClientListUrl: () => string;
  private getClientUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getClientListUrl = () => `${this.baseUrl}clients`;
    this.getClientUrl = (id: number) => `${this.baseUrl}clients/${id}`;
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
}
