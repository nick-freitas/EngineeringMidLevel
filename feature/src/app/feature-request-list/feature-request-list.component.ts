import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {FeatureRequest} from "../feature-request";
import {FeatureRequestService} from "../feature-request.service";

@Component({
  selector: 'rafr-feature-request-list',
  templateUrl: './feature-request-list.component.html',
  styleUrls: ['./feature-request-list.component.scss']
})
export class FeatureRequestListComponent implements OnInit {
  featureRequestList: Observable<FeatureRequest[]>;

  constructor(private featureRequestService: FeatureRequestService) {
  }

  ngOnInit() {
    this.featureRequestList = this.featureRequestService.getFeatureRequestList();
  }
}
