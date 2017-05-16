import {Component, Input} from "@angular/core";
import {ProductArea} from "../product-area";

@Component({
  selector: 'rafr-product-area-list-result',
  templateUrl: './product-area-list-result.component.html',
  styleUrls: ['./product-area-list-result.component.scss']
})
export class ProductAreaListResultComponent {
  @Input() productArea: ProductArea;

  constructor() {
  }
}
