import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ExternalComponent } from './app/external/external.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app/app-routing.module';
import {
  RouterModule,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(APP_ROUTES),
      BrowserAnimationsModule
    ),
    provideRouter(APP_ROUTES, withComponentInputBinding()),
  ],
})
bootstrapApplication(ExternalComponent)
