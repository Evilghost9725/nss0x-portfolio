import { useAppState } from '@/context/AppStateContext';
import { Theme } from '@/types/appPhases';

export function useTheme() {
  const { theme, setTheme } = useAppState();

  const switchTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    // Apply theme to document root for CSS custom properties
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return {
    theme,
    setTheme: switchTheme,
  };
}
