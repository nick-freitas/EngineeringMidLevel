import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAreaListResultComponent } from './product-area-list-result.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('ProductAreaListResultComponent', () => {
  let component: ProductAreaListResultComponent;
  let fixture: ComponentFixture<ProductAreaListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProductAreaListResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAreaListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
