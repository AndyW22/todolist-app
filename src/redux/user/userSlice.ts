import { createSlice } from '@reduxjs/toolkit';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { AppDispatch, RootState } from '../store';
import { Auth } from 'aws-amplify';

export const userSlice = createSlice({
  name: 'user',
  initialState: null as CognitoUserInterface | null,
  reducers: {
    signIn: (state, action) => {
      return action.payload as CognitoUserInterface;
    },
    signOut: () => {
      return null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const signOutAction = () => async (
  dispatch: AppDispatch,
): Promise<void> => {
  try {
    await Auth.signOut();
    dispatch(signOut());
  } catch (err) {
    console.log(err);
  }
};

export const selectCurrentUser = (
  state: RootState,
): CognitoUserInterface | null => state.user;

export default userSlice.reducer;
