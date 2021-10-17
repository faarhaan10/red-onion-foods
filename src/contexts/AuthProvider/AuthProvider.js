import React, { createContext } from 'react';
import useFoods from '../../hooks/useFoods';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFoods();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;