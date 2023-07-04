import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useTheme = () => {
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    document.body.style.background = theme === 'светлая' ? 'white' : '#000000be';
    document.body.style.color = theme === 'светлая' ? 'black' : 'white';
  }, [theme]);
};

export { useTheme };
