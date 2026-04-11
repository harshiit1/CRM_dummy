import { createAction, props } from '@ngrx/store';
import { IEditUserDetailModel } from '../model/user-edit-detail-model';

export const SaveEmployeeDetail = createAction(
  '[User] Save Employee Detail',
  props<{ payload: IEditUserDetailModel }>(),
);
export const SaveEmployeeDetailSuccess = createAction(
  '[User] Save Employee Detail Success',
  props<{ response: any }>(),
);

export const SaveEmployeeDetailFailure = createAction(
  '[User] Save Employee Detail Failure',
  props<{ error: any }>(),
);
