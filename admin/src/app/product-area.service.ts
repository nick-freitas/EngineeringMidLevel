import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseService} from "./base.service";
import {ProductArea} from "./product-area";

@Injectable()
export class ProductAreaService extends BaseService {
  private getProductAreaListUrl: () => string;
  private getProductAreaUrl: (id) => string;
  private createProductAreaUrl: () => string;
  private updateProductAreaUrl: (id) => string;
  private destroyProductAreaUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getProductAreaListUrl = () => `${this.baseUrl}product-areas`;
    this.getProductAreaUrl = (id: number) => `${this.baseUrl}product-areas/${id}`;
    this.createProductAreaUrl = () => `${this.baseUrl}product-areas`;
    this.updateProductAreaUrl = (id) => `${this.baseUrl}product-areas/${id}`;
    this.destroyProductAreaUrl = (id) => `${this.baseUrl}product-areas/${id}`;
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

  createProductArea(productArea): Observable<ProductArea> {
    return this.http.post(this.createProductAreaUrl(), productArea)
      .map(res => {
        const resProductArea = res.json() || {};

        return new ProductArea(resProductArea.id, resProductArea.name);
      })
      .catch(this.errorHandler);
  }

  updateProductArea(id, _productArea): Observable<ProductArea> {
    const productArea = Object.assign({}, _productArea);
    delete productArea.id;

    return this.http.put(this.updateProductAreaUrl(id), productArea)
      .map(res => {
        const resProductArea = res.json() || {};

        return new ProductArea(resProductArea.id, resProductArea.name);
      })
      .catch(this.errorHandler);
  }

  destroyProductArea(id): Observable<void> {
    return this.http.delete(this.destroyProductAreaUrl(id))
      .map(res => res.json())
      .catch(this.errorHandler);
  }
}
