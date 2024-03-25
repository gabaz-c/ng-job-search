import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBulletsComponent } from './job-details-bullets.component';

describe('DetailsBulletsComponent', () => {
  let component: DetailsBulletsComponent;
  let fixture: ComponentFixture<DetailsBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsBulletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
