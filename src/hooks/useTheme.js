import { useContext } from 'react';
import DarkModeContext from '~/contexts/ThemeContext';

const useTheme = () => {
    return useContext(DarkModeContext);
};

export default useTheme;
