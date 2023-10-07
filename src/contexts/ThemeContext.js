import { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState('light');

    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    // const value = {
    //     darkMode,
    //     handleDarkModeSwitch,
    // };

    useEffect(() => {
        const html = window.document.documentElement;
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setDarkMode('dark');
        } else {
            html.classList.remove('dark');
            setDarkMode('light');
        }
    }, [darkMode]);
    return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
};

export default DarkModeContext;
