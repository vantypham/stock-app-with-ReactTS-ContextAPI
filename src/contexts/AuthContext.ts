import React, {createContext} from 'react';
import { AuthState, initialState, type AuthAction } from './AuthStateAction';

export const AuthContext = createContext<{
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
}>({
    state: initialState,
    dispatch: () => null
})