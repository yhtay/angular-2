import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    RouterOutlet
  ],
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent {

}
