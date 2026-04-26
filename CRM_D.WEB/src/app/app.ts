import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponentsModule } from './shared/shared-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedComponentsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('CRM_D.WEB');
}
