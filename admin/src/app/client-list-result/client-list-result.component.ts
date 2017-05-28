import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Client} from "../client";

@Component({
  selector: 'rafr-client-list-result',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">{{client?.name}}</h4>
        <a class="card-link" [routerLink]="['/clients', client?.id]">See more</a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientListResultComponent {
  @Input() client: Client;
}
