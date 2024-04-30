import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './app/environment/environment'; // Import environment configuration
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient and HttpClientModule

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: HttpClient, useClass: HttpClientModule } // Provide HttpClient using HttpClientModule
  ],
})
.catch(err => console.error(err));
