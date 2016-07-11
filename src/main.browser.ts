import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router'

import { AppComponent,APP_ROUTER_PROVIDERS } from './app/index';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
]);
