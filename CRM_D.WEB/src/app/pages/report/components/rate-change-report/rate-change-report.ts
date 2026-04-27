import { Component } from '@angular/core';
import { SharedComponentsModule } from '../../../../shared/shared-components';

@Component({
  selector: 'app-rate-change-report',
  standalone: true,
  imports: [SharedComponentsModule],
  templateUrl: './rate-change-report.html',
  styleUrl: './rate-change-report.scss',
})
export class RateChangeReportComponent {
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
      customer: 'harshit ',
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
