import { Component, OnInit } from '@angular/core';
import { AuthenticationFacade } from '../store/authentication.facade';
import { Router } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInput } from "@angular/material/input";
import { SharedModule } from '../../shared-module/shared-module';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
  imports: [SharedModule],
})
export class SignInComponent implements OnInit {
  loginForm!: UntypedFormGroup;

  constructor(
    public authFacade: AuthenticationFacade,
    public router: Router,
    public fb: UntypedFormBuilder,
  ) {}

  initForm() {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.initForm();
  }
  login() {
    this.authFacade.redirectToDashboard();
  }
  showSignUpPage() {
    this.authFacade.redirectToSignUpPage();
  }
}
