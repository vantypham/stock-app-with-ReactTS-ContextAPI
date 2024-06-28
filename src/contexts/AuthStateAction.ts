
export interface AuthState {
    isLogIn: boolean;
    token: string | null;
} 
export const initialState: AuthState = {
    isLogIn: false,
    token: null
}

export type AuthAction = 
    {TYPE: 'LOGIN', TOKEN: string} | {TYPE: 'LOGOUT'}