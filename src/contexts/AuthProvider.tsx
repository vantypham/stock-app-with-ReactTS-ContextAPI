import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { initialState } from "./AuthStateAction";
import { ReactNode, useReducer } from "react";

type AuthProviderProps = {
    children: ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;