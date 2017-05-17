import {Component} from "@angular/core";
import {AuthService} from "../auth.service";

@Component({
  selector: 'rafr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public auth: AuthService) {
  }
}
