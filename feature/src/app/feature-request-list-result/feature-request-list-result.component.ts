import {Component, Input} from "@angular/core";
import {FeatureRequest} from "../feature-request";

@Component({
  selector: 'rafr-feature-request-list-result',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">{{featureRequest?.title}}</h4>
        <p class="card-text">{{featureRequest?.description}}</p>
        <a class="card-link" [routerLink]="['/feature-requests', featureRequest?.id]">See more</a>
      </div>
    </div>
  `
})
export class FeatureRequestListResultComponent {
  @Input() featureRequest: FeatureRequest;
}
