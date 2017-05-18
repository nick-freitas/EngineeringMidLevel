import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CreateProductAreaComponent} from "./create-product-area.component";
import {FormsModule} from "@angular/forms";
import {ProductAreaService} from "../product-area.service";

describe('CreateProductAreaComponent', () => {
  let component: CreateProductAreaComponent;
  let fixture: ComponentFixture<CreateProductAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CreateProductAreaComponent],
      providers: [ProductAreaService]
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
