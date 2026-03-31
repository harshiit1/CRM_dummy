import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared-module/shared-module';
import { SharedComponentsModule } from '../../shared-module/shared-components';
import { AuthenticationFacade } from '../store/authentication.facade';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule, SharedComponentsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUpComponent implements OnInit {
  signUpForm!: UntypedFormGroup;
  constructor(
    public authFacade: AuthenticationFacade,
    public fb: UntypedFormBuilder,
  ) {}
  ngOnInit(): void {
    this.onInit();
  }
  onInit() {
    this.signUpForm = this.fb.group({
      Name: [''],
      Email: [''],
      Password: [''],
      ConfirmPassword: [''],
    });
  }
  showAuthPage() {
    this.authFacade.redirectToSignInPage();
  }
}
