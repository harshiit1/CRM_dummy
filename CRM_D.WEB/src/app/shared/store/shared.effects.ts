import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as SharedActions from './shared.actions';
import * as AuthenticationActions from '../../authentication/store/authentication.actions';
import { Router } from '@angular/router';

@Injectable()
export class SharedEffects {
  private actions$ = inject(Actions);
  private router = inject(Router);

  RedirectToDasboardPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.RedirectToDashboard),
        tap(() => {
          this.router.navigate(['/crm/dashboard']);
        }),
      ),
    { dispatch: false },
  );
  RedirectToCustomersPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.RedirectToCustomers),
        tap(() => {
          this.router.navigate(['/crm/customers']);
        }),
      ),
    { dispatch: false },
  );
  RedirectToEmployeesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.RedirectToEmployees),
        tap(() => {
          this.router.navigate(['/crm/employees']);
        }),
      ),
    { dispatch: false },
  );
  RedirectToDocumentsPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.RedirectToDocuments),
        tap(() => {
          this.router.navigate(['/crm/documents']);
        }),
      ),
    { dispatch: false },
  );

  constructor() {}
}
