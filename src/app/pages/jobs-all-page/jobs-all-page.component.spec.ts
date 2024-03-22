import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsAllPageComponent } from './jobs-all-page.component';

describe('JobsAllPageComponent', () => {
  let component: JobsAllPageComponent;
  let fixture: ComponentFixture<JobsAllPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsAllPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
