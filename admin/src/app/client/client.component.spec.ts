import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ClientComponent} from "./client.component";
import {FormsModule} from "@angular/forms";
import {ClientService} from "../client.service";
import {MockBackend} from "@angular/http/testing";
import {HttpModule, XHRBackend} from "@angular/http";

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [ClientComponent],
      providers: [ClientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
