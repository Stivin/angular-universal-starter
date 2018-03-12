import { NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SharedTranslateService } from '@shared/shared-translate/shared-translate.service';
import { SharedTranslateServerLoaderService } from './shared-translate-server-loader.service';

export function translateFactory(transferState: TransferState): SharedTranslateServerLoaderService {
  return new SharedTranslateServerLoaderService('./dist/assets/i18n', '.json', transferState);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [TransferState]
      }
    }),
  ],
  providers: [SharedTranslateService]
})
export class SharedTranslateServerModule {
}
