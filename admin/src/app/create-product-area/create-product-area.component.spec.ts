import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductAreaComponent } from './create-product-area.component';

describe('CreateProductAreaComponent', () => {
  let component: CreateProductAreaComponent;
  let fixture: ComponentFixture<CreateProductAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
