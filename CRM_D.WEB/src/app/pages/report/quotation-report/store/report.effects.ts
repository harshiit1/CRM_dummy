import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ReportActions from './report.actions';
import { ReportService } from '../service/report-service';
import { mergeMap, map, catchError, of } from 'rxjs';

@Injectable()
export class ReportEffects {
  private actions$ = inject(Actions);
  private reportService = inject(ReportService);

  GetSaleReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.GetQuotationReportData),
      mergeMap((action) => {
        return this.reportService.getQuotationReport().pipe(
          map((response) => ReportActions.GetQuotationReportDataSuccess({ response })),
          catchError((error) => of(ReportActions.GetQuotationReportDataFailure({ error }))),
        );
      }),
    ),
  );
}
