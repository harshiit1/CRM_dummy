import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { concatLatestFrom } from '@ngrx/operators';
import { Observable, EMPTY, concat, of } from 'rxjs';
import * as UserActions from './user.actions';
import { Store } from '@ngrx/store';
import * as AuthenticationSelector from '../../authentication/store/authentication.selectors';
import { IEditUserDetailModel } from '../model/user-edit-detail-model';
import { UserService } from '../service/user-service';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private userService = inject(UserService);

  SaveEditUserDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.SaveEmployeeDetail),
      concatLatestFrom(() => this.store.select(AuthenticationSelector.selectedEmpCode)),
      mergeMap(([actions, empCode]) => {
        const payload: IEditUserDetailModel = {
          ...actions.payload,
          empCode: empCode ?? 0,
        };
        return this.userService.SaveEmployeeDetails(payload).pipe(
          map((response) => {
            return UserActions.SaveEmployeeDetailSuccess({ response });
          }),
          catchError((error) => of(UserActions.SaveEmployeeDetailFailure({ error }))),
        );
      }),
    ),
  );
}
