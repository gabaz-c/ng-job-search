import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFavoritesPageComponent } from './jobs-favorites-page.component';

describe('JobsFavoritesPageComponent', () => {
  let component: JobsFavoritesPageComponent;
  let fixture: ComponentFixture<JobsFavoritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsFavoritesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsFavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
