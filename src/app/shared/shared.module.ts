import { ModuleWithProviders, NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  exports: [
    LayoutsModule,
    TranslateModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
