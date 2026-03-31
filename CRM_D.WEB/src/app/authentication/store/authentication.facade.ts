import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthenticationActions from './authentication.actions';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationFacade {
  redirectToDashboard() {
    this.store.dispatch(AuthenticationActions.RedirectToDashboard());
  }
  redirectToSignUpPage() {
    this.store.dispatch(AuthenticationActions.RedirectToSignUpPage());
  }
  redirectToSignInPage() {
    this.store.dispatch(AuthenticationActions.RedirectToSignInPage());
  }
  constructor(public store: Store) {}
}
