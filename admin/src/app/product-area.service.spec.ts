import {inject, TestBed} from "@angular/core/testing";

import {ProductAreaService} from "./product-area.service";
import {HttpModule} from "@angular/http";

describe('ProductAreaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ProductAreaService]
    });
  });

  it('should be created', inject([ProductAreaService], (service: ProductAreaService) => {
    expect(service).toBeTruthy();
  }));
});
