import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAreaListResultComponent } from './product-area-list-result.component';

describe('ProductAreaListResultComponent', () => {
  let component: ProductAreaListResultComponent;
  let fixture: ComponentFixture<ProductAreaListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
