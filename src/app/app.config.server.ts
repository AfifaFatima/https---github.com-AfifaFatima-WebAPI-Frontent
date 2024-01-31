import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ToastrModule } from "ngx-toastr";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    ToastrModule
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
