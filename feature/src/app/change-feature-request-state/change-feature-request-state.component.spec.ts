import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeFeatureRequestStateComponent } from './change-feature-request-state.component';

describe('ChangeFeatureRequestStateComponent', () => {
  let component: ChangeFeatureRequestStateComponent;
  let fixture: ComponentFixture<ChangeFeatureRequestStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeFeatureRequestStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeFeatureRequestStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
