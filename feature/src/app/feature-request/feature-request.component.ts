import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

import {FeatureRequest} from "../feature-request";
import {FeatureRequestService} from "../feature-request.service";

@Component({
  selector: 'rafr-feature-request',
  templateUrl: './feature-request.component.html',
  styleUrls: ['./feature-request.component.scss']
})
export class FeatureRequestComponent implements OnInit {
  featureRequest: Observable<FeatureRequest>;
  featureRequestBackup: FeatureRequest;
  editing: boolean;

  constructor(private featureRequestService: FeatureRequestService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.fetchFeatureRequest();
  }

  enableEditing(originalFeatureRequest: FeatureRequest) {
    this.editing = true;
    this.featureRequestBackup = new FeatureRequest(originalFeatureRequest.id, originalFeatureRequest.title,
      originalFeatureRequest.description, originalFeatureRequest.clientPriority, originalFeatureRequest.client,
      originalFeatureRequest.targetDate, originalFeatureRequest.ticketUrl, originalFeatureRequest.productArea,
      originalFeatureRequest.status);
  }

  cancel() {
    this.editing = false;
    this.fetchFeatureRequest();
  }

  save(featureRequest: FeatureRequest) {
    this.featureRequest = this.featureRequestService.updateFeatureRequest(featureRequest.id, featureRequest);
    this.editing = false;
  }

  destroy(featureRequestId: number) {
    this.featureRequestService.destroyFeatureRequest(featureRequestId)
      .subscribe(featureRequest => this.router.navigate([`/feature-requests`]));
  }

  private fetchFeatureRequest() {
    const id = this.route.snapshot.params['id'];
    this.featureRequest = this.featureRequestService.getFeatureRequest(id);
  }
}
