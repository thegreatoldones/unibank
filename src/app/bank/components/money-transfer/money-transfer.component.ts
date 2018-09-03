import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
  transferForm: FormGroup;
  // TODO Need to add modal state to store & move all logic to actions/effects
  constructor(
    public dialogRef: MatDialogRef<MoneyTransferComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // TODO Add validations
    this.transferForm = this.formBuilder.group({
      template: [''],
      fromAccount: [''],
      nameAndSurname: ['', Validators.required],
      receiverAddress: [''],
      addressCd: [''],
      receiverAccount: [''],
      amount: [''],
      data: [''],
      title: ['']
    });
  }
  templateChanged(data) {
    console.log(data);
    this.transferForm.patchValue({
      amount: data.amount,
      title: data.title
    });
  }
  onSubmit() {
    console.log(this.transferForm.value);
  }
  onClose(): void {
    this.dialogRef.close();
  }
  get name() { return this.transferForm.get('nameAndSurname'); }
}
