import { Component } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  templateUrl: './generic-table.html',
  styleUrl: './generic-table.scss',
})
export class GenericTable {
  showToast(msg: string) {}
}
