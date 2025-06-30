import { ReactNode } from 'react';
import { useAppState } from '@/context/AppStateContext';
import BootSequence from '@/components/BootSequence';
import ThemeSelection from '@/components/ThemeSelection';
import CursorSelection from '@/components/CursorSelection';
import SystemReady from '@/components/SystemReady';

interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { phase } = useAppState();

  // Route to different components based on app phase
  switch (phase) {
    case 'LANDING':
    case 'BOOTING':
      return <BootSequence />;
    
    case 'THEME_SELECT':
      return <ThemeSelection />;
      
    case 'CURSOR_SELECT':
      return <CursorSelection />;
      
    case 'SYSTEM_READY':
      return <SystemReady />;
    
    case 'ASSISTANT_GREETING':
    case 'PANIC_MODE':
    case 'OS_SIMULATION':
    case 'LOCKDOWN_BREACH':
    case 'ACCESS_MENU':
      return (
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-family)'
        }}>
          <h1>Phase: {phase}</h1>
          <p>This phase is under development...</p>
          {children}
        </div>
      );
    
    default:
      return (
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-family)'
        }}>
          <h1>Unknown Phase: {phase}</h1>
          {children}
        </div>
      );
  }
}
