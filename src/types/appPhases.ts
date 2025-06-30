export type AppPhase = 
  | 'LANDING'
  | 'BOOTING'
  | 'THEME_SELECT'
  | 'CURSOR_SELECT'
  | 'SYSTEM_READY'
  | 'ASSISTANT_GREETING'
  | 'PANIC_MODE'
  | 'OS_SIMULATION'
  | 'LOCKDOWN_BREACH'
  | 'ACCESS_MENU';

export type Theme = 'terminal' | 'neon' | 'clean';

export type CursorType = 'default' | 'crosshair' | 'pointer';

export interface AppState {
  phase: AppPhase;
  theme: Theme;
  cursor: CursorType;
  isLoading: boolean;
}

export interface AppContextType extends AppState {
  setPhase: (phase: AppPhase) => void;
  setTheme: (theme: Theme) => void;
  setCursor: (cursor: CursorType) => void;
  setIsLoading: (loading: boolean) => void;
}
