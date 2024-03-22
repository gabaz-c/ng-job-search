import { Component } from '@angular/core';
import { JobPreviewComponent } from '../../components/job-preview/job-preview.component';
import { JobService } from '../../services/job.service';
import { Observable } from 'rxjs';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-layout',
  standalone: true,
  imports: [JobPreviewComponent, CommonModule],
  templateUrl: './job-layout.component.html',
  styleUrl: './job-layout.component.css'
})
export class JobLayoutComponent {
  public jobsList$!: Observable<Job[]>;
  constructor(private jobService: JobService) {
    this.getJobs();
  }

  getJobs(): void {
    this.jobsList$ = this.jobService.getJobs();
  }
}
