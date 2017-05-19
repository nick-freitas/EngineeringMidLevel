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
  private closeFeatureRequestUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getFeatureRequestListUrl = () => `${this.baseUrl}features`;
    this.getFeatureRequestUrl = (id: number) => `${this.baseUrl}features/${id}`;
    this.createFeatureRequestUrl = () => `${this.baseUrl}features`;
    this.updateFeatureRequestUrl = (id) => `${this.baseUrl}features/${id}`;
    this.destroyFeatureRequestUrl = (id) => `${this.baseUrl}features/${id}`;
    this.closeFeatureRequestUrl = (id) => `${this.baseUrl}features/${id}/close`;
  }

  getFeatureRequestList(): Observable<FeatureRequest[]> {
    return this.http.get(this.getFeatureRequestListUrl())
      .map(res => {
        const resFeatureRequests = res.json() || [];

        return resFeatureRequests.map(resFeatureRequest => this.createFeatureRequestFromResponse(resFeatureRequest));
      })
      .catch(this.errorHandler);
  }

  async getFeatureRequest(id: number): Promise<Observable<FeatureRequest>> {
    return this.http.get(this.getFeatureRequestUrl(id))
      .map(res => {
        const resFeatureRequest = res.json() || {};

        return this.createFeatureRequestFromResponse(resFeatureRequest);
      })
      .catch(this.errorHandler);
  }

  createFeatureRequest(featureRequest): Observable<FeatureRequest> {
    return this.http.post(this.createFeatureRequestUrl(), featureRequest)
      .map(res => {
        const resFeatureRequest = res.json() || {};

        return this.createFeatureRequestFromResponse(resFeatureRequest);
      })
      .catch(this.errorHandler);
  }

  updateFeatureRequest(id, _featureRequest): Observable<FeatureRequest> {
    const featureRequest = Object.assign({}, _featureRequest);
    delete featureRequest.id;
    delete featureRequest.status;

    return this.http.put(this.updateFeatureRequestUrl(id), featureRequest)
      .map(res => {
        const resFeatureRequest = res.json() || {};

        return this.createFeatureRequestFromResponse(resFeatureRequest);
      })
      .catch(this.errorHandler);
  }

  destroyFeatureRequest(id): Observable<void> {
    return this.http.delete(this.destroyFeatureRequestUrl(id))
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  closeFeatureRequest(id): Observable<FeatureRequest> {
    return this.http.post(this.closeFeatureRequestUrl(id), null)
      .map(res => {
        const resFeatureRequest = res.json() || {};

        return this.createFeatureRequestFromResponse(resFeatureRequest);
      })
      .catch(this.errorHandler);
  }

  private createFeatureRequestFromResponse(featureRequest): FeatureRequest {
    return new FeatureRequest(featureRequest.id, featureRequest.title, featureRequest.description,
      featureRequest.clientPriority, featureRequest.client, featureRequest.targetDate,
      featureRequest.ticketUrl, featureRequest.productArea, featureRequest.status)
  }
}
