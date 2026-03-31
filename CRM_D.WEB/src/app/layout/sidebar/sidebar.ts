import { Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  sidenavCollapsed: boolean = false;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  toggleSidenav(event:Event) {
    event?.stopPropagation();
    this.sidenavCollapsed = !this.sidenavCollapsed;
    this.collapsedEvent.emit(this.sidenavCollapsed);
  }
}
