import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-preview.component.html',
  styleUrl: './job-preview.component.css'
})
export class JobPreviewComponent {
  @Input() job?: Job;
}
