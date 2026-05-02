import * as ReportActions from './report.actions';
import { inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ReportSelector from './report.selectors';
@Injectable({
  providedIn: 'root',
})
export class ReportFacade {
  private store = inject(Store);

  quotationReportData$ = this.store.pipe(select(ReportSelector.selectQuotationReportData));

  getQuotationReportData() {
    this.store.dispatch(ReportActions.GetQuotationReportData());
  }
}
