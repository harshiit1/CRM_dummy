import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as AuthenticationActions from './authentication.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationEffects {
    // Use inject() to ensure these are available immediately
  private actions$ = inject(Actions);
  private router = inject(Router);
  private store = inject(Store);

  RedirectToDasboardPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.RedirectToDashboard),
        tap(() => {
          return this.router.navigate(['/crm']);
        }),
      ),
    { dispatch: false },
  );
  RedirectToSignUpPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.RedirectToSignUpPage),
        tap(() => {
          return this.router.navigate(['/authentication/signup']);
        }),
      ),
    { dispatch: false },
  );
  RedirectToSignInPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.RedirectToSignInPage),
        tap(() => {
          return this.router.navigate(['/authentication/signin']);
        }),
      ),
    { dispatch: false },
  );

}
