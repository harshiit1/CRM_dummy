import { Component } from '@angular/core';
import { SharedComponentsModule } from '../../../../shared/shared-components';

@Component({
  selector: 'app-sale-report',
  standalone: true,
  imports: [SharedComponentsModule],
  templateUrl: './sale-report.html',
  styleUrl: './sale-report.scss',
})
export class SaleReportComponent {
  columns = [
    { key: 'customer', label: 'Customer' },
    { key: 'company', label: 'Company' },
    { key: 'revenue', label: 'Revenue' },
    { key: 'deals', label: 'Deals' },
    { key: 'status', label: 'Status' },
    { key: 'lastActivity', label: 'Last Activity' },
  ];

  data = [
    {
      customer: 'John Doe',
      company: 'ABC Ltd',
      revenue: '$5000',
      deals: 3,
      status: 'Active',
      lastActivity: '2026-03-01',
    },
  ];

  currentPage = 1;
  pageSize = 10;
  totalItems = 52;

  onPageChange(page: number) {
    this.currentPage = page;

    // 🔥 Call API here
    console.log('Fetch data for page:', page);
  }
}
