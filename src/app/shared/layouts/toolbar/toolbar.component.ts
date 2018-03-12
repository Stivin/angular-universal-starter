import { Component, OnInit } from '@angular/core';

import { SharedTranslateService, ITranslatesLanguage } from '@shared/shared-translate';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  public languages: ITranslatesLanguage[];
  public currentLang: string;

  constructor(private _translateService: SharedTranslateService) {
  }

  ngOnInit() {
    this.languages = this._translateService.getLanguages();
    this.currentLang = this._translateService.getCurrentLang();
  }

  public changeLang(lang: string): void {
    this._translateService.changeLang(lang);
  }
}
