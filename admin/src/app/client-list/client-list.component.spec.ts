import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ClientListComponent} from "./client-list.component";
import {ClientService} from "../client.service";
import {HttpModule} from "@angular/http";
import {ClientListResultComponent} from "../client-list-result/client-list-result.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ClientListComponent, ClientListResultComponent],
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
