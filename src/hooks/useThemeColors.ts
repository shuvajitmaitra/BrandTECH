import { useMemo } from 'react';
import { darkColors, lightColors } from '../theme/colors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleLocalTheme } from '@/redux/slices/themeSlice';

export const useThemeColors = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const isDark = theme === 'dark';

  const themeToggle = () => {
    dispatch(toggleLocalTheme());
  };

  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);

  return {
    colors,
    colorScheme: theme,
    isDark,
    toggleColorScheme: themeToggle,
  };
};
