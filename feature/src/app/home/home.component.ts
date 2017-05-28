import {Component} from "@angular/core";
import {AuthService} from "../auth.service";

@Component({
  selector: 'rafr-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public auth: AuthService) {
  }
}
