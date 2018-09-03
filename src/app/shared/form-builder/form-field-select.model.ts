import { FormFieldBase } from './form-field.model';

export class FormFieldSelect extends FormFieldBase<string> {
  controlType = 'select-dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
