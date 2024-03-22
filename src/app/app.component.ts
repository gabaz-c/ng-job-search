import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { JobsAllPageComponent } from './pages/jobs-all-page/jobs-all-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobsAllPageComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
}
