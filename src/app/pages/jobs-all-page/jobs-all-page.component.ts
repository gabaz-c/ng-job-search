import { Component } from '@angular/core';
import { JobPreviewComponent } from '../../components/job-preview/job-preview.component';
import { Observable } from 'rxjs';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-all-page',
  standalone: true,
  imports: [JobPreviewComponent, CommonModule],
  templateUrl: './jobs-all-page.component.html',
  styleUrl: './jobs-all-page.component.css'
})
export class JobsAllPageComponent {
  public jobsList$!: Observable<Job[]>;
  constructor(private jobService: JobService) {
    this.getJobs();
  }

  getJobs(): void {
    this.jobsList$ = this.jobService.getJobs();
  }
}
