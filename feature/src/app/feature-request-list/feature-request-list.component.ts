import {Component} from "@angular/core";
import {FeatureRequest} from "../feature-request";
import {FeatureRequestService} from "../feature-request.service";
import {BaseListComponent} from "../base-list-component";

@Component({
  selector: 'rafr-feature-request-list',
  templateUrl: './feature-request-list.component.html',
  styleUrls: ['./feature-request-list.component.scss']
})
export class FeatureRequestListComponent extends BaseListComponent<FeatureRequest> {
  constructor(private featureRequestService: FeatureRequestService) {
    super();
  }

  getList(page, limit) {
    return this.featureRequestService.getList(page, limit);
  }
}
