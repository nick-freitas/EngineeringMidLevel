import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientListResultComponent} from './client-list-result.component';

describe('ClientListResultComponent', () => {
  let component: ClientListResultComponent;
  let fixture: ComponentFixture<ClientListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientListResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
