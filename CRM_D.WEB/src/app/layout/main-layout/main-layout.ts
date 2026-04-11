import { Component } from '@angular/core';
import { SharedComponentsModule } from '../../shared/shared-components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SharedComponentsModule, RouterOutlet],
  templateUrl: './main-layout.html',
})
export class MainLayoutComponent {
  sidebarCollapsed = false;
  sidebarCollapsedEvent(event: boolean) {
    this.sidebarCollapsed = event;
  }
}
