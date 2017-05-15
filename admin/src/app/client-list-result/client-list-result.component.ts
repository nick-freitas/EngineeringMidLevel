import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Client} from '../client';

@Component({
  selector: 'rafr-client-list-result',
  templateUrl: './client-list-result.component.html',
  styleUrls: ['./client-list-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientListResultComponent {
  @Input() client: Client;

  constructor() {
  }
}
