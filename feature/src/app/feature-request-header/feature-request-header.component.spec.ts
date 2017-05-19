import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRequestHeaderComponent } from './feature-request-header.component';

describe('FeatureRequestHeaderComponent', () => {
  let component: FeatureRequestHeaderComponent;
  let fixture: ComponentFixture<FeatureRequestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureRequestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRequestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
