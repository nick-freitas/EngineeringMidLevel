import {Component, Input} from "@angular/core";
import {FeatureRequestService} from "../feature-request.service";

@Component({
  selector: 'rafr-change-feature-request-state',
  templateUrl: './change-feature-request-state.component.html',
  styleUrls: ['./change-feature-request-state.component.scss']
})
export class ChangeFeatureRequestStateComponent {
  @Input() status: string;
  @Input() featureRequestId: number;

  constructor(private featureRequestService: FeatureRequestService) {
  }

  closeFeatureRequest() {
    this.featureRequestService.closeFeatureRequest(this.featureRequestId)
      .subscribe(featureRequest => this.status = featureRequest.status);
  }
}
