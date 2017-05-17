import {inject, TestBed} from "@angular/core/testing";

import {FeatureRequestService} from "./feature-request.service";
import {HttpModule} from "@angular/http";

describe('FeatureRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [FeatureRequestService]
    });
  });

  it('should be created', inject([FeatureRequestService], (service: FeatureRequestService) => {
    expect(service).toBeTruthy();
  }));
});
