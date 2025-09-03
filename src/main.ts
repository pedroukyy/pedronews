import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Si más adelante agregamos environments, habilitaremos esto.
// const production = false;
// if (production) {
//   enableProdMode();
// }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
