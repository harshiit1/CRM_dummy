import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../shared-module';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './generic-table.html',
})
export class GenericTableComponent {
  @Input() columns: any[] = [];
  // Example: [{ key: 'name', label: 'Customer' }]

  @Input() data: any[] = [];

  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;

  @Output() pageChange = new EventEmitter<number>();
  showToast(data: string) {
    console.log(data);
  }
}
