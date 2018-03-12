import { Injectable, Inject, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';

import { AppStorage } from 'forStorage/universal.inject';

import { ITranslatesLanguage } from './shared-translate.interface';

const LANGUAGES: ITranslatesLanguage[] = [
  { value: 'ru', name: 'Русский' },
  { value: 'en', name: 'English' }
];
const LANG_LIST: string[] = ['en', 'ru'];
const DEFAULT_LANG: string = 'en';

@Injectable()
export class SharedTranslateService implements OnInit {
  constructor(private readonly _translateService: TranslateService,
              private readonly _metaService: MetaService,
              @Inject(AppStorage) private _appStorage: Storage) {
    this._translateService.addLangs(LANG_LIST);
    this._translateService.setDefaultLang(DEFAULT_LANG);
    this.changeLang(this._appStorage.getItem('lang') || DEFAULT_LANG);
  }

  ngOnInit(): void {
  }

  public getLanguages(): ITranslatesLanguage[] {
    return LANGUAGES;
  }

  public getCurrentLang(): string {
    return this._translateService.currentLang;
  }

  public changeLang(lang: string): void {
    this._appStorage.setItem('lang', lang);
    this._translateService.use(lang);
    this._metaService.setTag('og:locale', lang);
  }
}
