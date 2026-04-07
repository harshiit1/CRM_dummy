import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as AuthenticationActions from './authentication.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { CommonService } from '../../core/services/common-service';

@Injectable()
export class AuthenticationEffects {
  // Use inject() to ensure these are available immediately
  private actions$ = inject(Actions);
  private router = inject(Router);
  private store = inject(Store);
  private authService = inject(AuthService);
  private commonService = inject(CommonService);

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

  RegisterUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.RegisterUser),
      mergeMap((action) => {
        return this.authService.registerUser(action.payload).pipe(
          map((response) => AuthenticationActions.RegisterUserSuccess({ response })),
          catchError((error) => of(AuthenticationActions.RegisterUserFailure({ error }))),
        );
      }),
    ),
  );
  RegisterUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.RegisterUserSuccess),
      tap((action) => {
        this.commonService.showNotification(
          'snackbar-success',
          action.response.data.responseMessage,
          'top',
          'right',
        );
      }),
      map(() => {
        return AuthenticationActions.RedirectToSignInPage();
      }),
    ),
  );
  RegisterUserFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.RegisterUserFailure),
        tap((action) => {
          this.commonService.showNotification(
            'snackbar-danger',
            'Failed to save data',
            'top',
            'right',
          );
        }),
      ),
    { dispatch: false },
  );
}
