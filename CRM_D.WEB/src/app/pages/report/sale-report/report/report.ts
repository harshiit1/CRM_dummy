import { ReportFacade } from '../store/report.facade';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedComponentsModule } from '../../../../shared/shared-components';
import { Subject } from 'rxjs';
import { SharedModule } from '../../../../shared/shared-module';

@Component({
  selector: 'app-sale-report',
  standalone: true,
  imports: [SharedComponentsModule, SharedModule],
  templateUrl: './report.html',
  styleUrl: './report.scss',
})
export class ReportComponent implements OnInit, OnDestroy {
  columns = [
    { key: 'area', label: 'Area' },
    { key: 'compName', label: 'Company Name' },
    { key: 'january', label: 'January' },
    { key: 'february', label: 'February' },
    { key: 'march', label: 'March' },
    { key: 'april', label: 'April' },
    { key: 'may', label: 'May' },
    { key: 'june', label: 'June' },
    { key: 'july', label: 'July' },
    { key: 'august', label: 'August' },
    { key: 'total', label: 'Total Sales' },
  ];

  currentPage = 1;
  pageSize = 10;
  totalItems = 52;
  destroy$ = new Subject<void>();

  constructor(public reportFacade: ReportFacade) {}

  ngOnInit(): void {
    this.reportFacade.getSaleReportData();
  }

  onPageChange(page: number) {
    this.currentPage = page;

    // 🔥 Call API here
    console.log('Fetch data for page:', page);
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.next();
  }
}
