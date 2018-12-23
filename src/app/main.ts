import '../polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule} from './app.module';

console.log('Entry Point...');

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(e => {
        console.log('Bootstrap Error', e);
    });