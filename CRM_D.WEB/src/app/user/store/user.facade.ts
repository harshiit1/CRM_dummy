import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from './user.actions';
import { IEditUserDetailModel } from '../model/user-edit-detail-model';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  saveEmployeeDetail(payload: IEditUserDetailModel) {
    this.store.dispatch(UserActions.SaveEmployeeDetail({ payload }));
  }
  constructor(public store: Store) {}
}
