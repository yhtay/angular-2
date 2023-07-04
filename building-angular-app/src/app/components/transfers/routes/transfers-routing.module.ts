import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { DetailsComponent } from '../components/details/details.component';
import { ListComponent } from '../components/list/list.component';

export const TRANSFER_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'details',
        component: DetailsComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
  ];
