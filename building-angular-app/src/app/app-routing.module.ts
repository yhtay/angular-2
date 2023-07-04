import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TransfersComponent } from './components/transfers/transfers.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

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
    component: TransfersComponent
  }];
