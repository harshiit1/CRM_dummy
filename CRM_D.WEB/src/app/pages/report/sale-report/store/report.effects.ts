import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ReportActions from './report.actions';
import { ReportService } from '../service/report-service';
import { of } from 'rxjs';

@Injectable()
export class ReportEffects {
  private actions$ = inject(Actions);
  private reportService = inject(ReportService);

  GetSaleReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.GetSaleReportData),
      mergeMap((action) => {
        return this.reportService.getSaleReport().pipe(
          map((response) => ReportActions.GetSaleReportDataSuccess({ response })),
          catchError((error) => of(ReportActions.GetSaleReportDataFailure({ error }))),
        );
      }),
    ),
  );
}
