import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import { HttpClient } from '@angular/common/http';
import { JobDetails } from '../models/job-details.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _favoriteJobsList: Job[] = [];

  constructor(private httpClient: HttpClient) { }

  get favoriteJobsList(): Job[] {
    return this._favoriteJobsList;
  }

  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>('/jobs');
  }

  getJobDetail(id: number): Observable<JobDetails> {
    return this.httpClient.get<JobDetails>(`/jobs/${id}`);
  }

  addJobToFavorites(job: Job): void {
    this._favoriteJobsList.push(job);
  }

  removeJobFromFavorites(job: Job): void {
    this._favoriteJobsList = this._favoriteJobsList.filter((j) => j.id !== job.id)
  }
}
