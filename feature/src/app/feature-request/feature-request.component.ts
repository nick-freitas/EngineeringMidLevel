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

  constructor(private featureRequestService: FeatureRequestService,
              private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.featureRequest = await this.fetchFeatureRequest();
  }

  private async fetchFeatureRequest(): Promise<Observable<FeatureRequest>> {
    const id = this.route.snapshot.params['id'];
    return this.featureRequestService.getFeatureRequest(id);
  }

  async resetFeatureRequest() {
    this.featureRequest = await this.fetchFeatureRequest();
  }
}
