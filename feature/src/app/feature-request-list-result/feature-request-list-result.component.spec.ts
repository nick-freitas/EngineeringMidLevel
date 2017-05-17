import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRequestListResultComponent } from './feature-request-list-result.component';

describe('FeatureRequestListResultComponent', () => {
  let component: FeatureRequestListResultComponent;
  let fixture: ComponentFixture<FeatureRequestListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureRequestListResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRequestListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
