import "rxjs/add/operator/filter";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import auth0 from "auth0-js";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: '-aNEHJmY7WSAO3uMspAUC6gGCqYRWO1Y',
    domain: 'rafr-feature.auth0.com',
    responseType: 'token id_token',
    audience: 'https://rafr-feature.auth0.com/userinfo',
    redirectUri: 'http://localhost:4300/callback',
    scope: 'openid'
  });
  isAuthenticated: BehaviorSubject<Boolean>;

  constructor(public router: Router) {
    this.isAuthenticated = new BehaviorSubject<Boolean>(true);
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
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

    this.isAuthenticated.next(true);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    this.isAuthenticated.next(false);

    // Go back to the home route
    this.router.navigate(['/']);
  }
}
