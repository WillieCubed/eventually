import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import 'firebase/auth';
// import { getFirebaseApp } from '../../firebase';
import { AppDispatch, RootState } from '..';
import { actions } from './slices';


/**
 * An async thunk to fetch all tasks for the currently signed in user.
 */
export const signOut = createAsyncThunk<
  void,
  void,
  {
    dispatch: AppDispatch,
    state: RootState,
  }
>(
  'users/signOut',
  async (_, { dispatch }) => {
    try {
      await firebase.auth().signOut();
      dispatch(actions.setUser(null));
    } catch (e) {
      // TODO: Handle errors
      console.error(e);
      throw e;
    }
  },
);

/**
 * Information used to process sign-in attempts.
 */
type SignInParams = {};

export const signIn = createAsyncThunk<
  void,
  SignInParams,
  {
    dispatch: AppDispatch,
    state: RootState,
  }
>(
  'users/signIn',
  async (info, { dispatch }) => {
    try {

      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const { user, additionalUserInfo, credential } = result;
      if (user === null) {
        return; // Should never happen, but static type analysis fails here.
      }
      // TODO: Differentiate by result.operationType
      const createdDate = (user.metadata.creationTime)
        ? new Date(user.metadata.creationTime)
        : new Date();
      const eventuallyUser = {
        id: user.uid,
        name: user.displayName || 'Eventually User',
        email: user.email || 'test@example.com', // TODO: Handle no email case
        createdDate: createdDate,
        photoUrl: user.photoURL,
      };
      dispatch(actions.setUser(eventuallyUser));
    } catch (e) {
      console.error(e);
      // TODO: Handle errors
      throw e;
    }
  },
);