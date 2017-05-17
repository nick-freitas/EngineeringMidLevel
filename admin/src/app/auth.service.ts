import "rxjs/add/operator/filter";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import auth0 from "auth0-js";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: 'pcoDzYlo-xknqE6v9S6KMiRKi5Bn7X0f',
    domain: 'rafr-admin.auth0.com',
    responseType: 'token id_token',
    audience: 'https://rafr-admin.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });
  isAuthenticated: BehaviorSubject <Boolean>;

  constructor(public router: Router) {
    console.log('is not > constr')
    this.isAuthenticated = new BehaviorSubject<Boolean>(false);
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    console.log('ha')
    this.auth0.parseHash((err, authResult) => {
      console.log('ph')
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    console.log('is auth')
    this.isAuthenticated.next(true);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    console.log('is not ath')
    this.isAuthenticated.next(false);

    // Go back to the home route
    this.router.navigate(['/']);
  }
}
