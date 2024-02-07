import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

const bootstrap = () => bootstrapApplication(AppComponent, config);

if (environment.production) {
    enableProdMode();
  }
export default bootstrap;
