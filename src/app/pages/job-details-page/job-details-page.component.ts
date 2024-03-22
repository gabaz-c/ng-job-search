import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Observable } from 'rxjs';
import { JobDetails } from '../../models/job-details.model';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'

@Component({
  selector: 'app-job-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.css'
})
export class JobDetailsPageComponent implements OnInit{
  public jobDetails$?: Observable<JobDetails>;
  private jobId!: number;

  constructor(private activatedRoute: ActivatedRoute, private jobService: JobService, private location: Location) {
    this.activatedRoute.params.subscribe(params => this.jobId = params['jobId']);
  }

  ngOnInit(): void {
    this.jobDetails$ = this.jobService.getJobDetail(this.jobId)
  }

  onBackButtonClick(): void {
    this.location.back();
  }
}
