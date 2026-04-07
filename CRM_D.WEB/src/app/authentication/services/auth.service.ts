import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRegister } from '../models/user-models';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}

  registerUser(payload: IUserRegister) {
    return this.http
      .post<any>(`${environment.apiUrl}/Authentication/AddEditUserDetails`, payload)
      .pipe(
        map((resp) => {
          return resp.Data;
        }),
      );
  }
}
