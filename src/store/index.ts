import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './tasks/slices';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

/**
 * The primary data store for the Eventually app.
 */
const store = configureStore({
  reducer: rootReducer,
});

// Logic to refresh store on code changes
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('.', () => {
    store.replaceReducer(rootReducer);
  });
}

/**
 * The root Redux store state for the Eventually app.
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * A mapping of action creators for the Eventually app.
 */
export type AppDispatch = typeof store.dispatch;

export default store;
