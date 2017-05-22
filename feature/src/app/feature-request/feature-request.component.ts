import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

import {FeatureRequest} from "../feature-request";
import {FeatureRequestService} from "../feature-request.service";
import {Thread} from "../thread";
import {ThreadService} from "../thread.service";

@Component({
  selector: 'rafr-feature-request',
  templateUrl: './feature-request.component.html',
  styleUrls: ['./feature-request.component.scss']
})
export class FeatureRequestComponent implements OnInit {
  featureRequest: Observable<FeatureRequest>;
  threads: Observable<Thread[]>;

  constructor(private featureRequestService: FeatureRequestService,
              private threadService: ThreadService,
              private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.featureRequest = await this.fetchFeatureRequest();
    this.threads = await this.fetchThreads()
  }

  private async fetchFeatureRequest(): Promise<Observable<FeatureRequest>> {
    const id = this.route.snapshot.params['id'];
    return this.featureRequestService.getFeatureRequest(id);
  }

  private async fetchThreads(): Promise<Observable<Thread[]>> {
    const id = this.route.snapshot.params['id'];
    return this.threadService.getThreadListForFeature(id);
  }

  //todo cancel is not working properly
  async resetFeatureRequest() {
    this.featureRequest = await this.fetchFeatureRequest();
  }
}
