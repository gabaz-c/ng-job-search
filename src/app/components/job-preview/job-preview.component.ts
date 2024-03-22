import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-preview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-preview.component.html',
  styleUrl: './job-preview.component.css'
})
export class JobPreviewComponent {
  @Input() job?: Job;

  constructor(private jobService: JobService, private router: Router) { }

  toggleStar(job: Job): void {
    this.jobService.favoriteJobsList.find((j) => j.id === job.id) ? this.jobService.removeJobFromFavorites(job) : this.jobService.addJobToFavorites(job);
  }

  checkIfJobIsFavorite(job: Job): boolean {
    return this.jobService.favoriteJobsList.find((j) => j.id === job.id) !== undefined;
  }

  displayStar(): boolean {
    return this.router.url === '/jobs-all';
  }
}
