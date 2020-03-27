import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//window['CESIUM_BASE_URL'] = 'src/assets/cesium/';

Cesium.buildModuleUrl.setBaseUrl('src/assets/cesium/');
//Cesium.Ion.defaultAccessToken="";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
