import { NgModule } from '@angular/core';
import { MetaLoader, MetaModule, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';

export function metaFactory(translate: TranslateService): MetaLoader {
  return new MetaStaticLoader({
    callback: (key: string) => translate.get(key),
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' | ',
    applicationName: 'DEFAULTS.APP_NAME',
    defaults: {
      title: 'DEFAULTS.TITLE',
      description: 'DEFAULTS.DESC',
      'og:site_name': 'DEFAULTS.SITE_NAME',
      'og:type': 'website',
      'og:locale': 'ru_RU',
      'og:locale:alternate': 'en_GB'
    }
  });
}

@NgModule({
  imports: [
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory),
      deps: [TranslateService]
    })
  ]
})
export class SharedMetaModule {
}
