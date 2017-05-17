import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FeatureRequestService} from "../feature-request.service";

@Component({
  selector: 'rafr-create-feature-request',
  templateUrl: './create-feature-request.component.html',
  styleUrls: ['./create-feature-request.component.scss']
})
export class CreateFeatureRequestComponent {
  featureRequestModel: FeatureRequestModel;

  constructor(private featureRequestService: FeatureRequestService,
              private router: Router) {
    this.featureRequestModel = {};
  }

  createFeatureRequest() {
    this.featureRequestService.createFeatureRequest(this.featureRequestModel)
      .subscribe(featureRequest => this.router.navigate([`/feature-requests/${featureRequest.id}`]));
  }
}

interface FeatureRequestModel {
  name?: string;
}
