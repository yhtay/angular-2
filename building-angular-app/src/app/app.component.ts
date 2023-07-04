import { Component } from '@angular/core';
import { TransfersComponent } from './components/transfers/transfers.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    NavBarComponent,
    CommonModule,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'building-angular-app';
}
