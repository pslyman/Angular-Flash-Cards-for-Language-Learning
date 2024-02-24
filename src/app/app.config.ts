import { ApplicationConfig, importProvidersFrom, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { routes } from "./app.routes";
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
],
};
