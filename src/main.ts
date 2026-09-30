/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */


import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config.js';
import {App} from './app/app';

bootstrapApplication(App, {
  providers: [provideRouter(routeConfig)],
}).catch((err) => console.error(err));