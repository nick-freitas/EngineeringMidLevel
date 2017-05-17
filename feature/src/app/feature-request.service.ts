import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseService} from "./base.service";
import {FeatureRequest} from "./feature-request";

@Injectable()
export class FeatureRequestService extends BaseService {
  private getFeatureRequestListUrl: () => string;
  private getFeatureRequestUrl: (id) => string;
  private createFeatureRequestUrl: () => string;
  private updateFeatureRequestUrl: (id) => string;
  private destroyFeatureRequestUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getFeatureRequestListUrl = () => `${this.baseUrl}features`;
    this.getFeatureRequestUrl = (id: number) => `${this.baseUrl}features/${id}`;
    this.createFeatureRequestUrl = () => `${this.baseUrl}features`;
    this.updateFeatureRequestUrl = (id) => `${this.baseUrl}features/${id}`;
    this.destroyFeatureRequestUrl = (id) => `${this.baseUrl}features/${id}`;
  }

  getFeatureRequestList(): Observable<FeatureRequest[]> {
    return this.http.get(this.getFeatureRequestListUrl())
      .map(res => {
        const resFeatureRequests = res.json() || [];

        return resFeatureRequests.map(resFeatureRequest => new FeatureRequest(resFeatureRequest.id,
          resFeatureRequest.title, resFeatureRequest.description, resFeatureRequest.clientPriority,
          resFeatureRequest.client, resFeatureRequest.targetDate, resFeatureRequest.ticketUrl,
          resFeatureRequest.productArea, resFeatureRequest.status));
      })
      .catch(this.errorHandler);
  }

  getFeatureRequest(id: number): Observable<FeatureRequest> {
    return this.http.get(this.getFeatureRequestUrl(id))
      .map(res => {
        const resFeatureRequest = res.json() || {};

        return new FeatureRequest(resFeatureRequest.id, resFeatureRequest.title, resFeatureRequest.description,
          resFeatureRequest.clientPriority, resFeatureRequest.client, resFeatureRequest.targetDate,
          resFeatureRequest.ticketUrl, resFeatureRequest.productArea, resFeatureRequest.status);
      })
      .catch(this.errorHandler);
  }

  createFeatureRequest(featureRequest): Observable<FeatureRequest> {
    return this.http.post(this.createFeatureRequestUrl(), featureRequest)
      .map(res => {
        const resFeatureRequest = res.json() || {};

        return new FeatureRequest(resFeatureRequest.id, resFeatureRequest.title, resFeatureRequest.description,
          resFeatureRequest.clientPriority, resFeatureRequest.client, resFeatureRequest.targetDate,
          resFeatureRequest.ticketUrl, resFeatureRequest.productArea, resFeatureRequest.status);
      })
      .catch(this.errorHandler);
  }

  updateFeatureRequest(id, _featureRequest): Observable<FeatureRequest> {
    const featureRequest = Object.assign({}, _featureRequest);
    delete featureRequest.id;

    return this.http.put(this.updateFeatureRequestUrl(id), featureRequest)
      .map(res => {
        const resFeatureRequest = res.json() || {};

        return new FeatureRequest(resFeatureRequest.id, resFeatureRequest.title, resFeatureRequest.description,
          resFeatureRequest.clientPriority, resFeatureRequest.client, resFeatureRequest.targetDate,
          resFeatureRequest.ticketUrl, resFeatureRequest.productArea, resFeatureRequest.status);
      })
      .catch(this.errorHandler);
  }

  destroyFeatureRequest(id): Observable<void> {
    return this.http.delete(this.destroyFeatureRequestUrl(id))
      .map(res => res.json())
      .catch(this.errorHandler);
  }
}
