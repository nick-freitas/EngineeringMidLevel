import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeatureRequestComponent } from './create-feature-request.component';

describe('CreateFeatureRequestComponent', () => {
  let component: CreateFeatureRequestComponent;
  let fixture: ComponentFixture<CreateFeatureRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFeatureRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeatureRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
