import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as CustomerActions from './customer.actions';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { CustomerForm } from '../customer-form/customer-form';

@Injectable()
export class CustomerEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);
  private dialog = inject(MatDialog);

  OpenAddCustomerDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CustomerActions.OpenAddCustomerDialog),
        tap(() => {
          return this.dialog.open(CustomerForm, {
            width: '700px',
          });
        }),
      ),
    { dispatch: false },
  );
}
