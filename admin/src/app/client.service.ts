import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Client} from './client';
import {BaseService} from './base.service';

@Injectable()
export class ClientService extends BaseService {
  private clientListUrl: string;

  constructor(private http: Http) {
    super();

    this.clientListUrl = `/api/clients`;
  }

  getClientList(): Observable<Client[]> {
    return this.http.get(this.clientListUrl)
      .map(res => {
        const body = res.json();
        const clients = body || [];

        return clients.map(client => new Client(client.id, client.name));
      })
      .catch(this.errorHandler);
  }
}
