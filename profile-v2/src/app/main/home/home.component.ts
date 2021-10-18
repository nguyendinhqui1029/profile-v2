import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'qlearnly-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void { }

  changeLang() {
    const lang = localStorage.getItem('lang') === 'en' ? 'vi' :'en';
    this.translateService.use(lang);
    localStorage.setItem('lang',lang);
  }
}
