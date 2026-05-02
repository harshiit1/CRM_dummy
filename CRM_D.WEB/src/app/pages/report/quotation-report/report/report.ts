import { ReportFacade } from '../store/report.facade';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedComponentsModule } from '../../../../shared/shared-components';
import { Subject } from 'rxjs';
import { SharedModule } from '../../../../shared/shared-module';

@Component({
  selector: 'app-quotation-report',
  standalone: true,
  imports: [SharedComponentsModule, SharedModule],
  templateUrl: './report.html',
  styleUrl: './report.scss',
})
export class ReportComponent implements OnInit, OnDestroy {
  columns = [
    { key: 'new_biz', label: 'New Business Person' },
    { key: 'comp_name', label: 'Company Name' },
    { key: 'person_name', label: 'Contact Person' },
    { key: 'product', label: 'Product' },
    { key: 'grade', label: 'Grade' },
    { key: 'unit', label: 'Unit' },
    { key: 'estQty', label: 'Qty' },
    { key: 'price', label: 'Price' },
    { key: 'remarks', label: 'Remarks' },
  ];

  currentPage = 1;
  pageSize = 10;
  totalItems = 52;
  destroy$ = new Subject<void>();

  constructor(public reportFacade: ReportFacade) {}

  ngOnInit(): void {
    this.reportFacade.getQuotationReportData();
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
