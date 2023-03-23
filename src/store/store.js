import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ui from './slices/ui';
import events from './slices/events';
import auth from './slices/auth';

const reducer = combineReducers({
  ui,
  events,
  auth,
});

export default configureStore({
  reducer,
});
