import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TransfersComponent } from './components/transfers/transfers.component';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [{
    path: '',
    redirectTo: 'transfer',
    pathMatch: 'full'
  },
  {
    path: 'transfer',
    component: TransfersComponent
  }];
