import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qlearnly-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(protected translateService: TranslateService) {
    const lang = localStorage.getItem('lang') || 'vi';
    translateService.use(lang);
  }

  ngOnInit(): void {}
}
