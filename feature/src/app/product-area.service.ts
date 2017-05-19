import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseService} from "./base.service";
import {ProductArea} from "./product-area";

@Injectable()
export class ProductAreaService extends BaseService {
  private getProductAreaListUrl: () => string;
  private getProductAreaUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getProductAreaListUrl = () => `${this.baseUrl}product-areas`;
    this.getProductAreaUrl = (id: number) => `${this.baseUrl}product-areas/${id}`;
  }

  getProductAreaList(): Observable<ProductArea[]> {
    return this.http.get(this.getProductAreaListUrl())
      .map(res => {
        const resProductAreas = res.json() || [];

        return resProductAreas.map(productArea => new ProductArea(productArea.id, productArea.name));
      })
      .catch(this.errorHandler);
  }

  getProductArea(id: number): Observable<ProductArea> {
    return this.http.get(this.getProductAreaUrl(id))
      .map(res => {
        const resProductArea = res.json() || {};

        return new ProductArea(resProductArea.id, resProductArea.name);
      })
      .catch(this.errorHandler);
  }
}
