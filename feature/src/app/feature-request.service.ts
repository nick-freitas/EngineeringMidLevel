import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseService} from "./base.service";
import {FeatureRequest} from "./feature-request";

@Injectable()
export class FeatureRequestService extends BaseService<FeatureRequest> {
  constructor(http: Http) {
    super(http);
  }

  getListUrl() {
    return `${this.baseUrl}features`;
  }

  getOneUrl(id: number): string {
    return `${this.baseUrl}features/${id}`;
  }

  updateUrl(id: number): string {
    return `${this.baseUrl}features/${id}`;
  }

  createUrl(): string {
    return `${this.baseUrl}features`;
  }

  destroyUrl(id: number): string {
    return `${this.baseUrl}features/${id}`;
  }

  closeUrl(id: number): string {
    return `${this.baseUrl}features/${id}/close`;
  }

  closeFeatureRequest(id): Observable<FeatureRequest> {
    return this.http.post(this.closeUrl(id), null)
      .map(res => this.createNewInstance(res.json() || {}))
      .catch(this.errorHandler);
  }

  createNewInstance(featureRequest): FeatureRequest {
    return new FeatureRequest(featureRequest.id, featureRequest.title, featureRequest.description,
      featureRequest.clientPriority, featureRequest.client, featureRequest.targetDate,
      featureRequest.ticketUrl, featureRequest.productArea, featureRequest.status)
  }
}
