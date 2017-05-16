import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {ClientService} from "../client.service";
import {Client} from "../client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'rafr-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client: Observable<Client>;
  clientBackup: Client;
  editing: boolean;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.fetchClient();
  }

  enableEditing(originalClient: Client) {
    this.editing = true;
    this.clientBackup = new Client(originalClient.id, originalClient.name);
  }

  cancel() {
    this.editing = false;
    this.fetchClient();
  }

  save(client: Client) {
    this.client = this.clientService.updateClient(client.id, client);
    this.editing = false;
  }

  destroy(clientId: number) {
    this.clientService.destroyClient(clientId)
      .subscribe(client => this.router.navigate([`/clients`]));
  }

  private fetchClient() {
    const id = this.route.snapshot.params['id'];
    this.client = this.clientService.getClient(id);
  }
}
