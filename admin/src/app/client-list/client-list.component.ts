import {Component} from "@angular/core";
import {ClientService} from "../client.service";
import {Client} from "../client";
import {BaseListComponent} from "../base-list-component";

@Component({
  selector: 'rafr-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent extends BaseListComponent<Client> {
  constructor(private clientService: ClientService) {
    super();
  }

  getList(page, limit) {
    return this.clientService.getList(page, limit);
  }
}
