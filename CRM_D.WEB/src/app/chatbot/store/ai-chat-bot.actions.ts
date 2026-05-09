import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AiChatBotActions = createActionGroup({
  source: 'AiChatBot',
  events: {
    'Load AiChatBots': emptyProps(),
  },
});
