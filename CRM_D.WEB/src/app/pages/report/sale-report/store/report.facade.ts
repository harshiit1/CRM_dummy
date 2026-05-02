import * as ReportActions from './report.actions';
import { inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ReportSelector from './report.selectors';
@Injectable({
  providedIn: 'root',
})
export class ReportFacade {
  private store = inject(Store);

  salesReportData$ = this.store.pipe(select(ReportSelector.selectSaleReportData));

  getSaleReportData() {
    this.store.dispatch(ReportActions.GetSaleReportData());
  }
}
