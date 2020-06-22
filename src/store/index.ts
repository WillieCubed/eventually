import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/reducers';

function calendarsReducer(calendars = [], action: any) {
  switch (action.type) {
    default:
      return calendars;
  }
}

const rootReducer = combineReducers({
  tasksReducer,
  calendarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
