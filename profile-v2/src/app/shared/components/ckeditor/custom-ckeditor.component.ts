import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from './ckeditor5/build/ckeditor.js';

@Component({
  selector: 'qlearnly-editor',
  templateUrl: './custom-ckeditor.component.html',
  styleUrls: ['./custom-ckeditor.component.scss'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>CustomCkeditorComponent),
    multi: true
  }]
})
export class CustomCkeditorComponent implements ControlValueAccessor {
 
  public Editor = ClassicEditor;
  public value:string = '';
  public config = {
    toolbar: {
      items: [
        'sourceediting',
        '|',
        'heading',
        '|',
        'alignment',
        'bold',
        'italic',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        'todolist',
        '|',
        'uploadImage',
        'blockQuote',
        '|',
        'undo',
        'redo',
        'codeblock',
        '|',
        'subscript',
        'superscript',
        '|',
        // 'imageinsert',
        'specialcharacters',
        'horizontalline',
        'htmlembed',
        'fontsize',
        'hightlight',
        'fontfamily',
        'fontcolor',
        'fontbackgroundcolor',
        'findandreplace',
        'code',
        'table',
        'mediaembed',
        'link',
        'indent',
        'outdent',
        'inserttable',
      ],
    },
    image: {
      toolbar: [
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'toggleImageCaption',
        'imageTextAlternative',
      ],
    },
    language: 'en',
  };
  onChange = (value:string)=>{}; 
  onTouched = ()=>{};
  disable:boolean = false;
  writeValue(obj: any): void {
   this.value = obj ? obj : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    this.disable = isDisabled;
  }
  onEditorChange({ editor }: ChangeEvent) {
    this.onChange(editor.getData());
  }
}
