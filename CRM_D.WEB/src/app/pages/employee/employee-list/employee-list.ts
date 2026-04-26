import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeListComponent {
  value = '';
  filterTable(body: String, value: any) {}
  openDialog(value: any, type: any) {}
}
