import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SharedModule } from '../../shared-module';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './generic-table.html',
})
export class GenericTableComponent implements OnChanges {
  @Input() columns: any[] = [];
  // Example: [{ key: 'name', label: 'Customer' }]

  @Input() tableData: any[] = [];

  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  dataSource!: MatTableDataSource<any>;

  constructor() {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  showToast(data: string) {
    console.log(data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.tableData || [];
  }
}
