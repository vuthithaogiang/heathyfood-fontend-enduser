import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

const existToken = localStorage.getItem('access_token') !== null;

const getDefaultAuthEmpty = () => {
    return {};
};

const getDefaultAuth = () => {
    let auth = {};

    if (!existToken) {
        auth = getDefaultAuthEmpty();
    } else {
        auth = {
            access_token: localStorage.getItem('access_token'),
            role: 'USER',
        };
    }

    return auth;
};

export const AuthProovider = ({ children }) => {
    const [auth, setAuth] = useState(getDefaultAuth);

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
