import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {BaseService} from "./base.service";
import {ProductArea} from "./product-area";

@Injectable()
export class ProductAreaService extends BaseService<ProductArea> {
  constructor(http: Http) {
    super(http);
  }

  getListUrl(): string {
    return `${this.baseUrl}product-areas`;
  }

  getOneUrl(id: number): string {
    return `${this.baseUrl}product-areas/${id}`;
  }

  createNewInstance(productArea): ProductArea {
    return new ProductArea(productArea.id, productArea.name);
  }

  updateUrl(_): string {
    return undefined;
  }

  createUrl(): string {
    return undefined;
  }

  destroyUrl(_): string {
    return undefined;
  }
}
