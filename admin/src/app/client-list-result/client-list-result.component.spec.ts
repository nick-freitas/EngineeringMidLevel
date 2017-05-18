import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientListResultComponent} from './client-list-result.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";

describe('ClientListResultComponent', () => {
  let component: ClientListResultComponent;
  let fixture: ComponentFixture<ClientListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
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
