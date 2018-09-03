import { FormFieldBase } from './form-field.model';

export class FormFieldText extends FormFieldBase<string> {
  controlType = 'text';
  type: string;
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
