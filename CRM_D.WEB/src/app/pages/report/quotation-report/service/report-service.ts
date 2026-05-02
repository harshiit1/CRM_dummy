import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private http = inject(HttpClient);

  getQuotationReport(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/Report/GetQuotationReport`).pipe(
      map((resp) => {
        return resp.data;
      }),
    );
  }
}
