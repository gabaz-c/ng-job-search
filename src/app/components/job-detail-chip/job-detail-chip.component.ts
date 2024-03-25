import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-chip',
  standalone: true,
  imports: [],
  templateUrl: './job-detail-chip.component.html',
  styleUrl: './job-detail-chip.component.css'
})
export class DetailChipComponent {
  @Input() chipText?: string;
}
