import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FeatureRequestService} from "../feature-request.service";

@Component({
  selector: 'rafr-create-feature-request',
  template: `
    <div class="card">
      <div class="card-block">
        <form (ngSubmit)="createFeatureRequest()" #createFeatureRequestForm="ngForm">
          <h4 class="card-title">Create Feature Request</h4>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" aria-describedby="nameHelp"
                   placeholder="Enter name"
                   [(ngModel)]="featureRequestModel.name" required>
            <small id="nameHelp" class="form-text text-muted">The feature Request's name</small>
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  `
})
export class CreateFeatureRequestComponent {
  featureRequestModel: FeatureRequestModel;

  constructor(private featureRequestService: FeatureRequestService,
              private router: Router) {
    this.featureRequestModel = {};
  }

  // todo missing all of the fields to create
  createFeatureRequest() {
    this.featureRequestService.create(this.featureRequestModel)
      .subscribe(featureRequest => this.router.navigate([`/feature-requests/${featureRequest.id}`]));
  }
}

interface FeatureRequestModel {
  name?: string;
}
