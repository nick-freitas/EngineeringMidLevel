import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {FeatureRequest} from "../feature-request";
import {Client} from "../client";
import {ProductArea} from "../product-area";
import {ClientService} from "../client.service";
import {ProductAreaService} from "../product-area.service";
import {FeatureRequestService} from "../feature-request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'rafr-feature-request-header',
  templateUrl: './feature-request-header.component.html',
  styleUrls: ['./feature-request-header.component.scss']
})
export class FeatureRequestHeaderComponent implements OnInit {
  @Input() featureRequest: FeatureRequest;
  @Output() reemitFeatureRequest: EventEmitter<void>;
  clients: Observable<Client[]>;
  productAreas: Observable<ProductArea[]>;
  editing: boolean;

  constructor(private clientService: ClientService,
              private productAreaService: ProductAreaService,
              private featureRequestService: FeatureRequestService,
              private router: Router) {
    this.reemitFeatureRequest = new EventEmitter<void>();
  }

  enableEditing() {
    this.editing = true;
  }

  async ngOnInit() {
    [
      this.clients,
      this.productAreas
    ] = await Promise.all([
      this.clientService.getClientList(),
      this.productAreaService.getProductAreaList()
    ]);
  }

  cancel() {
    this.editing = false;
    this.reemitFeatureRequest.emit();
  }

  destroy() {
    this.featureRequestService.destroyFeatureRequest(this.featureRequest.id)
      .subscribe(featureRequest => this.router.navigate([`/feature-requests`]));
  }

  async save() {
    this.featureRequestService.updateFeatureRequest(this.featureRequest.id, this.featureRequest)
      .subscribe(updatedFeatureRequest => {
        this.editing = false;
        this.featureRequest = updatedFeatureRequest;
      });
  }
}
