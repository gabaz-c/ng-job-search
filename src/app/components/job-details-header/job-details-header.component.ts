import { Component, Input } from '@angular/core';
import { JobDetails } from '../../models/job-details.model';
import { CommonModule } from '@angular/common';
import { DetailChipComponent } from '../job-detail-chip/job-detail-chip.component';

@Component({
  selector: 'app-job-details-header',
  standalone: true,
  imports: [CommonModule, DetailChipComponent],
  templateUrl: './job-details-header.component.html',
  styleUrl: './job-details-header.component.css'
})
export class JobDetailsHeaderComponent {
  @Input() jobDetails?: JobDetails;
}
