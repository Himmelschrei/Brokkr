import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent,
  {
    providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideNoopAnimations()
]
  }
).catch(err => console.error(err));
