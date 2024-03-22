import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobPreviewComponent } from '../../components/job-preview/job-preview.component';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-favorites-page',
  standalone: true,
  imports: [JobPreviewComponent, CommonModule],
  templateUrl: './jobs-favorites-page.component.html',
  styleUrl: './jobs-favorites-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsFavoritesPageComponent {
  favoriteJobsList: Job[] = [];

  constructor(private jobService: JobService) {
    this.favoriteJobsList = this.jobService.favoriteJobsList;
  }
}
