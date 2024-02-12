import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_ROUTES } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(APP_ROUTES, withComponentInputBinding())
  ]
})
  .catch((err) => console.error(err));
