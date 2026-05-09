import { AiChatBotComponent } from './../chatbot/ai-chat-bot/ai-chat-bot';
import { NgModule } from '@angular/core';
import { SidebarComponent } from '../layout/sidebar/sidebar';
import { GenericTableComponent } from './generic-components/generic-table/generic-table';

@NgModule({
  declarations: [],
  imports: [SidebarComponent, GenericTableComponent, AiChatBotComponent],
  exports: [SidebarComponent, GenericTableComponent, AiChatBotComponent],
})
export class SharedComponentsModule {}
