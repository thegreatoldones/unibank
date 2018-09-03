import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormFieldBase } from './form-field.model';

@Injectable()
export class FormControlService {
  constructor() {}
  buildFormGroup(fields: FormFieldBase<any>[]) {
    let group: any = {};
    fields.forEach(field => {
      if (field.required) {
        group[field.key] = new FormControl(field.value || '', Validators.required);
      } else if (field.minLength) {
        group[field.key] = new FormControl(field.value || '', Validators.minLength(field.minLength));
      } else if (field.required && field.minLength) {
        group[field.key] = new FormControl(field.value || '', [Validators.minLength(field.minLength), Validators.required]);
      } else {
        group[field.key] = new FormControl(field.value || '');
      }
    });
    return new FormGroup(group);
  }
}
