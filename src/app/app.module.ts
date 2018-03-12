// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { CookieService } from 'ngx-cookie-service';
import { PrebootModule } from 'preboot';
// shared
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { SharedMetaModule } from '@shared/shared-meta';
import { SharedModule } from '@shared/shared.module';
// components
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    HttpClientModule,
    RouterModule,
    AppRoutes,
    TransferHttpModule,
    BrowserAnimationsModule,
    SharedMetaModule,
    SharedModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
