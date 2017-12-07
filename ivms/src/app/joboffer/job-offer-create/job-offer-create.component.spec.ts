import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferCreateComponent } from './job-offer-create.component';

describe('JobOfferCreateComponent', () => {
  let component: JobOfferCreateComponent;
  let fixture: ComponentFixture<JobOfferCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
