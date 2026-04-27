import { NgModule } from '@angular/core';
import { SidebarComponent } from '../layout/sidebar/sidebar';
import { GenericTableComponent } from './generic-components/generic-table/generic-table';

@NgModule({
  declarations: [],
  imports: [SidebarComponent, GenericTableComponent],
  exports: [SidebarComponent, GenericTableComponent],
})
export class SharedComponentsModule {}
