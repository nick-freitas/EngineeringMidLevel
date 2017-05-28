import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {ProductArea} from "../product-area";

@Component({
  selector: 'rafr-product-area-list-result',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">{{productArea?.name}}</h4>
        <a class="card-link" [routerLink]="['/product-areas', productArea?.id]" i18n>See more</a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductAreaListResultComponent {
  @Input() productArea: ProductArea;
}
