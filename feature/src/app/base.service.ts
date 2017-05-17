import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';

export abstract class BaseService {
  baseUrl: string;

  constructor() {
    this.baseUrl = environment.apiUrl;
  }

  protected errorHandler(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body: any = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
