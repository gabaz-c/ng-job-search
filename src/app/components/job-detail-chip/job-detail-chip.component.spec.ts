import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChipComponent } from './job-detail-chip.component';

describe('DetailChipComponent', () => {
  let component: DetailChipComponent;
  let fixture: ComponentFixture<DetailChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
