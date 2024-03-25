import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Observable, takeUntil } from 'rxjs';
import { JobDetails } from '../../models/job-details.model';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'
import { DetailChipComponent } from '../../components/job-detail-chip/job-detail-chip.component';
import { JobDetailsHeaderComponent } from '../../components/job-details-header/job-details-header.component';
import { DetailsBulletsComponent } from '../../components/job-details-bullets/job-details-bullets.component';
import { BaseDestroyable } from '../../directives/base-destroyable';

@Component({
  selector: 'app-job-details-page',
  standalone: true,
  imports: [CommonModule, DetailChipComponent, JobDetailsHeaderComponent, DetailsBulletsComponent],
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.css'
})
export class JobDetailsPageComponent extends BaseDestroyable implements OnInit {
  public jobDetails$?: Observable<JobDetails>;
  private jobId!: number;

  constructor(private activatedRoute: ActivatedRoute, private jobService: JobService, private location: Location) {
    super();
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => this.jobId = params['jobId']);
  }

  ngOnInit(): void {
    this.jobDetails$ = this.jobService.getJobDetail(this.jobId)
  }

  onBackButtonClick(): void {
    this.location.back();
  }
}
