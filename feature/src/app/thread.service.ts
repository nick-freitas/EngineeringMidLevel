import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Thread} from "./thread";

@Injectable()
export class ThreadService extends BaseService {
  private getThreadListForFeatureUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getThreadListForFeatureUrl = (id) => `${this.baseUrl}features/${id}/threads`;
  }

  getThreadListForFeature(id): Observable<Thread[]> {
    return this.http.get(this.getThreadListForFeatureUrl(id))
      .map(res => {
        const resThreads = res.json() || [];

        return resThreads.map(thread => new Thread(thread.id, thread.name, thread.feature));
      })
      .catch(this.errorHandler);
  }
}
