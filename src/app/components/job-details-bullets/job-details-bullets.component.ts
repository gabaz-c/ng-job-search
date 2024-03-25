import { Component, Input } from '@angular/core';
import { JobDetails } from '../../models/job-details.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-bullets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details-bullets.component.html',
  styleUrl: './job-details-bullets.component.css'
})
export class DetailsBulletsComponent {
  @Input() jobDetails?: JobDetails;
}
