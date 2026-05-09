import { createFeature, createReducer, on } from '@ngrx/store';
import { AiChatBotActions } from './ai-chat-bot.actions';

export const aiChatBotFeatureKey = 'aiChatBot';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(AiChatBotActions.loadAiChatBots, (state) => state),
);

export const aiChatBotFeature = createFeature({
  name: aiChatBotFeatureKey,
  reducer,
});
