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
  accounts;
  // TODO Need to add modal state to store & move all logic to actions/effects
  constructor(
    public dialogRef: MatDialogRef<MoneyTransferComponent>,
    private formBuilder: FormBuilder
  ) {
    this.accounts = ['Account 1', 'Account 2', 'Account 3'];
  }

  ngOnInit() {
    this.transferForm = this.formBuilder.group({
      template: [''],
      fromAccount: ['', Validators.required],
      nameAndSurname: ['', Validators.required],
      receiverAddress: ['', Validators.required],
      addressCd: ['', Validators.required],
      receiverAccount: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(100)]],
      date: ['', Validators.required],
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
  get name() {
    return this.transferForm.get('nameAndSurname');
  }
  get fromAccount() {
    return this.transferForm.get('fromAccount');
  }
  get amount() {
    return this.transferForm.get('amount');
  }
}
