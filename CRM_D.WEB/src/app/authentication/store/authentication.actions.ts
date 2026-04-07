import { createAction, props } from '@ngrx/store';
import { IUserRegister } from '../models/user-models';

export const RedirectToDashboard = createAction('[Authentication] Redirect to Dashboard');
export const RedirectToSignUpPage = createAction('[Authentication] Redirect to SignUp Page');
export const RedirectToSignInPage = createAction('[Authentication] Redirect to SignIn Page');

export const SignInUser = createAction('[Authentication] Sign In User');
export const SignInUserSuccess = createAction('[Authentication] Sign In User Success');
export const SignInUserFailure = createAction('[Authentication] Sign In User Failure');

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
