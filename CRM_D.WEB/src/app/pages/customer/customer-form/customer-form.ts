import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SharedModule } from '../../../shared/shared-module';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.scss',
})
export class CustomerForm implements OnInit {
  customerForm!: UntypedFormGroup;
  customerStatus = ['Active', 'Inactive', 'Lead', 'Prospect'];

  dialogRef = inject(MatDialogRef<CustomerForm>);
  constructor(
    public fb: UntypedFormBuilder,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.customerForm = this.fb.group({
      CompName: [''],
      Email: [''],
      Address: [''],
      Phone: [''],
      Status: [''],
      Remarks: [''],
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  saveCustomer() {}
}
