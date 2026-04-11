import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as AuthenticationSelector from './authentication.selectors';
import * as AuthenticationActions from './authentication.actions';
import { IUserLogin, IUserRegister } from '../models/user-models';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationFacade {
  store = inject(Store);
  loggedInUserDetail$ = this.store.pipe(select(AuthenticationSelector.selectedUserDetail));

  redirectToDashboard() {
    this.store.dispatch(AuthenticationActions.RedirectToDashboard());
  }
  redirectToSignUpPage() {
    this.store.dispatch(AuthenticationActions.RedirectToSignUpPage());
  }
  redirectToSignInPage() {
    this.store.dispatch(AuthenticationActions.RedirectToSignInPage());
  }
  registerUser(payload: IUserRegister) {
    this.store.dispatch(AuthenticationActions.RegisterUser({ payload }));
  }
  loginUser(payload: IUserLogin) {
    this.store.dispatch(AuthenticationActions.LoginUser({ payload }));
  }
}
