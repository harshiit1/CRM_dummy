import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAiChatBot from './ai-chat-bot.reducer';

export const selectAiChatBotState = createFeatureSelector<fromAiChatBot.State>(
  fromAiChatBot.aiChatBotFeatureKey,
);
