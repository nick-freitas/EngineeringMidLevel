import {Component, Input} from "@angular/core";
import {FeatureRequest} from "../feature-request";

@Component({
  selector: 'rafr-feature-request-list-result',
  templateUrl: './feature-request-list-result.component.html',
  styleUrls: ['./feature-request-list-result.component.scss']
})
export class FeatureRequestListResultComponent {
  @Input() featureRequest: FeatureRequest;

  constructor() {
  }
}
