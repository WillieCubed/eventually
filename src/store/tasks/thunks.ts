import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AppDispatch, RootState  } from '..';
import { Task } from './types';
import { addTask } from './slices'; 

/**
 * An async thunk to fetch all tasks for the currently signed in user.
 * 
 * First tries to load tasks from local cache and then tries to fetch from
 * backend storage.
 */
export const refreshTasks = createAsyncThunk<
  void,
  void,
  {
    dispatch: AppDispatch,
    state: RootState,
  }
>(
  'tasks/refreshTasks',
  async (_, { dispatch, getState }) => {
    const userId = getState().user.data?.id;
    if (!userId) {
      return;
    }
    const db = firebase.firestore();    
    const snap = await db.collection(`users/${userId}/tasks`).get();
    const tasks = snap.docs.map(doc => doc.data() as Task);
    // TODO: Fetch local copy first
    tasks.forEach(task => dispatch(addTask(task)));
  }
);
