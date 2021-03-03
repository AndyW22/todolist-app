import { useEffect } from 'react';
import { useAppDispatch } from './redux/store';
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';
import { signIn, signOut } from './redux/user/userSlice';

export const useAuth = (): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData: any) => {
      if (nextAuthState === AuthState.SignedIn) {
        dispatch(signIn(authData.attributes));
      } else if (nextAuthState === AuthState.SignedOut) {
        dispatch(signOut());
      }
    });
  }, []);
};
