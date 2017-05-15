import {TestBed, inject} from '@angular/core/testing';
import {ClientService} from './client.service';
import {HttpModule} from '@angular/http';


describe('ClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ClientService]
    });
  });

  it('should be created', inject([ClientService], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));
});
