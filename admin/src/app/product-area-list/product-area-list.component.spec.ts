import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAreaListComponent } from './product-area-list.component';
import {ProductAreaListResultComponent} from "../product-area-list-result/product-area-list-result.component";

describe('ProductAreaListComponent', () => {
  let component: ProductAreaListComponent;
  let fixture: ComponentFixture<ProductAreaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAreaListComponent, ProductAreaListResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
