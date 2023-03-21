import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ui from './slices/ui';

const reducer = combineReducers({
  ui,
});

export default configureStore({
  reducer,
});
