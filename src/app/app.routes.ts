import { Routes } from '@angular/router';
import { JobLayoutComponent } from './pages/job-layout/job-layout.component';

export const routes: Routes = [
    { path: 'jobs-list', component: JobLayoutComponent },
    { path: '', redirectTo: '/jobs-list', pathMatch:'full' }
];
