import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ProductAreaComponent} from "./product-area.component";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {ProductAreaService} from "../product-area.service";
import {HttpModule} from "@angular/http";

describe('ProductAreaComponent', () => {
  let component: ProductAreaComponent;
  let fixture: ComponentFixture<ProductAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpModule],
      declarations: [ProductAreaComponent],
      providers: [ProductAreaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
