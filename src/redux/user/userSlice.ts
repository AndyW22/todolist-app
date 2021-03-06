import { createSlice } from '@reduxjs/toolkit';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { RootState } from '../store';

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

export const selectCurrentUser = (
  state: RootState,
): CognitoUserInterface | null => state.user;

export default userSlice.reducer;
