import {Component, Input} from "@angular/core";
import {FeatureRequestService} from "../feature-request.service";

@Component({
  selector: 'rafr-change-feature-request-state',
  template: `
    <button type="button" class="btn btn-outline-secondary btn-lg btn-block" *ngIf="status === 'CLOSED'" disabled i18n>
      Feature Request Already Completed
    </button>
    <button type="button" class="btn btn-success btn-lg btn-block" *ngIf="status !== 'CLOSED'"
            (click)="closeFeatureRequest()" i18n>Complete Feature Request
    </button>
  `
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
