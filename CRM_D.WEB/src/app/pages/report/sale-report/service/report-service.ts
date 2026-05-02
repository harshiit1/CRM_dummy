import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private http = inject(HttpClient);

  getSaleReport(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/Report/GetCompanySaleReport`).pipe(
      map((resp) => {
        return resp.data;
      }),
    );
  }
}
