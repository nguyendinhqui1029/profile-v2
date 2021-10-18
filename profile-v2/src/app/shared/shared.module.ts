import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CustomCkeditorComponent } from './components/ckeditor/custom-ckeditor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [CustomCkeditorComponent],
  imports: [ CommonModule, CKEditorModule ],
  exports: [TranslateModule, CustomCkeditorComponent, CKEditorModule],
  providers: [],
})
export class SharedModule {}