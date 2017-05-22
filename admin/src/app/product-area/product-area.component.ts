import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

import {ProductArea} from "../product-area";
import {ProductAreaService} from "../product-area.service";

@Component({
  selector: 'rafr-product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.scss']
})
export class ProductAreaComponent implements OnInit {
  productArea: Observable<ProductArea>;
  editing: boolean;

  constructor(private productAreaService: ProductAreaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.fetchProductArea();
  }

  enableEditing(originalProductArea: ProductArea) {
    this.editing = true;
  }

  cancel() {
    this.editing = false;
    this.fetchProductArea();
  }

  save(productArea: ProductArea) {
    this.productArea = this.productAreaService.updateProductArea(productArea.id, productArea);
    this.editing = false;
  }

  destroy(productAreaId: number) {
    this.productAreaService.destroyProductArea(productAreaId)
      .subscribe(productArea => this.router.navigate([`/product-areas`]));
  }

  private fetchProductArea() {
    const id = this.route.snapshot.params['id'];
    this.productArea = this.productAreaService.getProductArea(id);
  }
}
