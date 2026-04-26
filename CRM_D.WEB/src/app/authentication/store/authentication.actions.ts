import { createAction, props } from '@ngrx/store';
import { IUserLogin, IUserRegister } from '../models/user-models';
import { IUserDetail } from '../models/user-detail-model';

export const RedirectToDashboard = createAction('[Authentication] Redirect to Dashboard');
export const RedirectToSignUpPage = createAction('[Authentication] Redirect to SignUp Page');
export const RedirectToSignInPage = createAction('[Authentication] Redirect to SignIn Page');

export const LoginUser = createAction(
  '[Authentication] Login User',
  props<{ payload: IUserLogin }>(),
);
export const LoginUserSuccess = createAction(
  '[Authentication] Login User Success',
  props<{ response: IUserDetail }>(),
);
export const LoginUserFailure = createAction(
  '[Authentication] Login User Failure',
  props<{ error: any }>(),
);

export const RegisterUser = createAction(
  '[Authentication] Register User',
  props<{ payload: IUserRegister }>(),
);
export const RegisterUserSuccess = createAction(
  '[Authentication] Register User Success',
  props<{ response: any }>(),
);
export const RegisterUserFailure = createAction(
  '[Authentication] Register User Failure',
  props<{ error: any }>(),
);
