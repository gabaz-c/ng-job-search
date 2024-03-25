import { Routes } from '@angular/router';
import { JobsAllPageComponent } from './pages/jobs-all-page/jobs-all-page.component';
import { JobsFavoritesPageComponent } from './pages/jobs-favorites-page/jobs-favorites-page.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'jobs-all', pathMatch: 'full' },
    { path: 'jobs-all', component: JobsAllPageComponent },
    { path: 'jobs-favorites', component: JobsFavoritesPageComponent },
    { path: 'job/:jobId', component: JobDetailsPageComponent },
    { path: '**', component: ErrorPageComponent }

];
