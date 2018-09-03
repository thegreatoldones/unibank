import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { FormComponent } from '../shared/form-builder/form/form.component';
import { FormFieldComponent } from '../shared/form-builder/form-field/form-field.component';


export const COMPONENTS = [AppComponent, FormComponent, FormFieldComponent];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
