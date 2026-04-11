import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared-module';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthenticationFacade } from '../../authentication/store/authentication.facade';
import { map, Subject, takeUntil, tap } from 'rxjs';
import { IUserDetail } from '../../authentication/models/user-detail-model';
import { IEditUserDetailModel } from '../model/user-edit-detail-model';
import { UserFacade } from '../store/user.facade';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetailComponent implements OnInit {
  dialogRef = inject(MatDialogRef<UserDetailComponent>);
  userDetailForm!: UntypedFormGroup;
  departments = ['Sales', 'Support', 'HR', 'Finance'];
  designation = ['SalesMan', 'CCare', 'Finance', 'NewBiz'];
  Status = ['Active', 'On Leave', 'InActive'];
  destroy$ = new Subject<void>();

  constructor(
    public fb: UntypedFormBuilder,
    public authFacade: AuthenticationFacade,
    public userFacade: UserFacade,
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.subscribeUserDetailForm();
  }

  initForm() {
    this.userDetailForm = this.fb.group({
      FullName: ['', Validators.required],
      Email: [''],
      Phone: [''],
      Department: [''],
      Designation: [''],
      Status: ['Active'],
      StartDate: [],
      Address: [''],
      City: [''],
      State: [''],
    });
  }

  subscribeUserDetailForm() {
    this.authFacade.loggedInUserDetail$
      .pipe(
        takeUntil(this.destroy$),
        tap((data) => {
          console.log(data);
          this.userDetailForm.patchValue({
            FullName: data?.fullName,
            Email: data?.email,
            Phone: data?.contactNo,
            Designation: data?.designation,
            StartDate: data?.createdOn,
          });
        }),
      )
      .subscribe();
  }

  saveEmployeeDetail() {
    const payload: IEditUserDetailModel = {
      empCode: 0,
      email: this.userDetailForm.get('Email')?.value,
      phone: this.userDetailForm.get('Phone')?.value,
      department: this.userDetailForm.get('Department')?.value,
      status: this.userDetailForm.get('Status')?.value,
      startDate: this.userDetailForm.get('StartDate')?.value,
      address: this.userDetailForm.get('Address')?.value,
      city: this.userDetailForm.get('City')?.value,
      state: this.userDetailForm.get('State')?.value,
    };
    console.log(payload)
    // this.userFacade.saveEmployeeDetail(payload);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
