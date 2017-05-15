import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {Observable} from 'rxjs/Observable';
import {Client} from '../client';

@Component({
  selector: 'rafr-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clientList: Observable<Client[]>;
  createClientModel: { name?: string };

  constructor(private clientService: ClientService) {
    this.createClientModel = {};
  }

  ngOnInit() {
    this.clientList = this.clientService.getClientList();
  }

  createClient() {
    console.log(`Wants to create a client with name ${this.createClientModel.name}`);
  }
}
