import { configureStore, combineReducers, createAction } from '@reduxjs/toolkit';

const ACTION_ADD_TASK = 'ADD_TASK';

const ACTION_REMOVE_TASK = 'REMOVE_TASK';


export const addTask = createAction<string>(ACTION_ADD_TASK);

export const removeTask = createAction<string>(ACTION_REMOVE_TASK);


function calendarsReducer(calendars = [], action: any) {
  switch (action.type) {
    default:
      return calendars;
  }
}

const rootReducer = combineReducers({
  // tasks: tasksReducer,
  calendars: calendarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
