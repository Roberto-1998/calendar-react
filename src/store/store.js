import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ui from './slices/ui';
import events from './slices/events';

const reducer = combineReducers({
  ui,
  events,
});

export default configureStore({
  reducer,
});
