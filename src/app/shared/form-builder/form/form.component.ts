import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldBase } from '../form-field.model';
import { FormControlService } from '../form-control.sevice';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ FormControlService ]
})
export class FormComponent implements OnInit {
  @Input() fields: FormFieldBase<any>[] = [];
  form: FormGroup;

  constructor(private formControlService: FormControlService) { }

  ngOnInit() {
    this.form = this.formControlService.buildFormGroup(this.fields);
  }
  onSubmit() {
    console.log(this.form.value);
  }

}
