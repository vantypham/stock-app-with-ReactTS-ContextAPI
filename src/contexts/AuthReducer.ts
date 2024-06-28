import { AuthState, AuthAction } from './AuthStateAction';

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.TYPE) {
        case 'LOGIN':
            return {...state, isLogIn: true, token: action.TOKEN}
        case 'LOGOUT':
            return {...state, isLogIn: false, token: null}
        default:
            return state;
    }
}