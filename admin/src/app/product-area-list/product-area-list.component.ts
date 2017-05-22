import {Component} from "@angular/core";

import {ProductAreaService} from "../product-area.service";
import {ProductArea} from "../product-area";
import {BaseListComponent} from "../base-list-component";

@Component({
  selector: 'rafr-product-area-list',
  templateUrl: './product-area-list.component.html',
  styleUrls: ['./product-area-list.component.scss']
})
export class ProductAreaListComponent extends BaseListComponent<ProductArea> {
  constructor(private productAreaService: ProductAreaService) {
    super();
  }

  getList(page, limit) {
    return this.productAreaService.getList(page, limit);
  }
}
