import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Thread} from "./thread";

@Injectable()
export class ThreadService extends BaseService {
  private getThreadListForFeatureUrl: (id) => string;
  private getThreadUrl: (id) => string;
  private createThreadUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getThreadListForFeatureUrl = (id) => `${this.baseUrl}features/${id}/threads`;
    this.getThreadUrl = (id) => `${this.baseUrl}threads/${id}`;
    this.createThreadUrl = (id) => `${this.baseUrl}features/${id}/posts`;
  }

  getThreadListForFeature(id): Observable<Thread[]> {
    return this.http.get(this.getThreadListForFeatureUrl(id))
      .map(res => {
        const resThreads = res.json() || [];

        return resThreads.map(thread => new Thread(thread.id, thread.name, thread.feature));
      })
      .catch(this.errorHandler);
  }

  getThread(id): Observable<Thread> {
    return this.http.get(this.getThreadUrl(id))
      .map(res => {
        const resThread = res.json() || [];

        return new Thread(resThread.id, resThread.name, resThread.feature);
      })
      .catch(this.errorHandler);
  }

  createThread(id, thread): Observable<Thread> {
    return this.http.post(this.createThreadUrl(id), thread)
      .map(res => {
        const resThread = res.json() || {};

        return new Thread(resThread.id, resThread.name, resThread.feature);

      })
      .catch(this.errorHandler);
  }
}
