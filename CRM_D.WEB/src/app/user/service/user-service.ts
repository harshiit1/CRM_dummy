import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEditUserDetailModel } from '../model/user-edit-detail-model';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  SaveEmployeeDetails(payload: IEditUserDetailModel): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/User/SaveEditUserDetails`, payload).pipe(
      map((resp) => {
        return resp.data;
      }),
    );
  }
}
