import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {ProductAreaService} from "../product-area.service";
import {ProductArea} from "../product-area";

@Component({
  selector: 'rafr-product-area-list',
  templateUrl: './product-area-list.component.html',
  styleUrls: ['./product-area-list.component.scss']
})
export class ProductAreaListComponent implements OnInit {
  productAreaList: Observable<ProductArea[]>;

  constructor(private productAreaService: ProductAreaService) {
  }

  ngOnInit() {
    this.productAreaList = this.productAreaService.getProductAreaList();
  }
}
