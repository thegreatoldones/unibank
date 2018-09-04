import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
  transferForm: FormGroup;
  accounts;
  templates;
  // TODO Need to add modal state to store & move all logic to actions/effects
  constructor(
    public dialogRef: MatDialogRef<MoneyTransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder
  ) {
    this.accounts = ['Account 1', 'Account 2', 'Account 3'];
    this.templates = [
      {
        fromAccount: 'Account 1',
        amount: 200,
        title: 'Template 1',
        nameAndSurname: 'Name',
        receiverAddress: 'Address',
        addressCd: 'Address cd',
        receiverAccount: '34341314'}
    ];
  }

  ngOnInit() {
    console.log(this.data);
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
      fromAccount: data.fromAccount,
      amount: data.amount,
      title: data.title,
      nameAndSurname: data.nameAndSurname,
      receiverAddress: data.receiverAddress,
      addressCd: data.addressCd,
      receiverAccount: data.receiverAccount
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
  get receiverAddress() {
    return this.transferForm.get('receiverAddress');
  }
  get addressCd() {
    return this.transferForm.get('addressCd');
  }
  get receiverAccount() {
    return this.transferForm.get('receiverAccount');
  }
  get amount() {
    return this.transferForm.get('amount');
  }
  get date() {
    return this.transferForm.get('date');
  }
}
