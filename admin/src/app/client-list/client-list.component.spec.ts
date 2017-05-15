import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientListComponent} from './client-list.component';
import {ClientService} from '../client.service';
import {HttpModule} from '@angular/http';

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ClientListComponent],
      providers: [ClientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
