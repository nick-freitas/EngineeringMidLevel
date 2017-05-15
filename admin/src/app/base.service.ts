import {Observable} from 'rxjs/Observable';

export abstract class BaseService {
  baseUrl: string;

  constructor() {
    // this.baseUrl = `http://localhost:3000/api/`;
    this.baseUrl = `http://ec2-54-82-207-216.compute-1.amazonaws.com:3000/api/`;
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
