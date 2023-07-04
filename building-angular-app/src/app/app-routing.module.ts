import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TransfersComponent } from './components/transfers/transfers.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProfileComponent } from './components/profile/profile.component';

export const APP_ROUTES: Routes = [{
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'transfers',
    loadChildren: () => import('./components/transfers/routes/transfers-routing.module').then(mod => mod.TRANSFER_ROUTES)
  },
  {
    path: 'profile',
    component: ProfileComponent
  }];
