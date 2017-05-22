import {Component, Input} from "@angular/core";

@Component({
  selector: 'rafr-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() loadingText: string;

  constructor() {
  }
}
