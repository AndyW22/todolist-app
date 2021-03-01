import { createSlice } from '@reduxjs/toolkit';
import {
  CognitoUserInterface,
} from '@aws-amplify/ui-components';

export const userSlice = createSlice({
  name: 'user',
  initialState: {} as CognitoUserInterface[],
  reducers: {
    signIn: (state, action) => {
      return action.payload as CognitoUserInterface[];
    },
    signOut: () => {
      return {} as CognitoUserInterface[];
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
