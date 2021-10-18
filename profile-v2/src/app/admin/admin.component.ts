import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'qlearnly-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(protected translateService: TranslateService) {
    const lang = localStorage.getItem('lang') || 'vi';
    translateService.use(lang);
  }
  ngOnInit(): void { }
}
