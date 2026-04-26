import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, tap } from 'rxjs/operators';
import * as DashboardActions from './dashboard.actions';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../../user/user-details/user-details';
import { Store } from '@ngrx/store';

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions);
  private dialog = inject(MatDialog);
  private store = inject(Store);

  OpenUserDetailDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DashboardActions.OpenUserDetailDialog),
        tap(() => {
          console.log('Dialog action triggered');
          return this.dialog.open(UserDetailComponent, {
            minWidth: 'max-content',
            disableClose: true,
          });
        }),
      ),
    { dispatch: false },
  );
}
