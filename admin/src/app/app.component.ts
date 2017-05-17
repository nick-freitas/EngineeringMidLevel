import {Component} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
  selector: 'rafr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
