import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRequestListComponent } from './feature-request-list.component';

describe('FeatureRequestListComponent', () => {
  let component: FeatureRequestListComponent;
  let fixture: ComponentFixture<FeatureRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
