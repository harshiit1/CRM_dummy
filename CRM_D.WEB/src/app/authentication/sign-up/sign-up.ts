import { CommonService } from './../../core/services/common-service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { SharedComponentsModule } from '../../shared/shared-components';
import { AuthenticationFacade } from '../store/authentication.facade';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule, SharedComponentsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUpComponent implements OnInit {
  signUpForm!: UntypedFormGroup;
  hidePassword = true;
  constructor(
    public authFacade: AuthenticationFacade,
    public fb: UntypedFormBuilder,
    public commonService: CommonService,
  ) {}
  ngOnInit(): void {
    this.onInit();
  }
  onInit() {
    this.signUpForm = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.required, Validators.email],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      Department: ['', Validators.required],
      Role: ['', Validators.required],
    });
  }
  showAuthPage() {
    this.authFacade.redirectToSignInPage();
  }

  registerBtnClick() {
    if (this.signUpForm.invalid) {
      this.commonService.showNotification(
        'snackbar-danger',
        'One or More required fields are empty',
        'top',
        'right',
      );
    }
    const payload = this.signUpForm.getRawValue();
    console.log(payload);
    this.authFacade.registerUser(payload);
  }
}
