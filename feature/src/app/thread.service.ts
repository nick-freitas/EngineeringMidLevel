import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseService} from "./base.service";
import {Thread} from "./thread";

@Injectable()
export class ThreadService extends BaseService<Thread> {
  constructor(http: Http) {
    super(http);
  }

  getListForFeature(id): Observable<Thread[]> {
    return this.http.get(this.getListForFeatureUrl(id))
      .map(res => {
        const resThreads = res.json() || [];

        return resThreads.map(thread => new Thread(thread.id, thread.name, thread.feature));
      })
      .catch(this.errorHandler);
  }

  createForFeature(id, thread): Observable<Thread> {
    return this.http.post(this.createForFeatureUrl(id), thread)
      .map(res => this.createNewInstance(res.json() || {}))
      .catch(this.errorHandler);
  }

  getListForFeatureUrl(id): string {
    return `${this.baseUrl}features/${id}/threads`;
  }

  createForFeatureUrl(id):string {
    return `${this.baseUrl}features/${id}/threads`;
  }

  getOneUrl(id: number): string {
    return `${this.baseUrl}threads/${id}`;
  }

  createNewInstance(thread): Thread {
    return new Thread(thread.id, thread.name, thread.feature);
  }

  getListUrl(): string {
    return undefined;
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
