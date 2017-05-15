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

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clientList = this.clientService.getClientList();
  }
}
