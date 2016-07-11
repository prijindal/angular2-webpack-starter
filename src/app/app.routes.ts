import { provideRouter, RouterConfig } from '@angular/router'

import { Home } from './home/index'
import { FourOFour } from './404/index'

export const routes: RouterConfig = [
  { path: '', component: Home },
  { path: '**', component: FourOFour },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
