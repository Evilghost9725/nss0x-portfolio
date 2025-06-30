import { useTheme } from '@/hooks/useTheme';
import { usePhase } from '@/hooks/usePhase';
import RadialMenu, { RadialOption } from '@/components/ui/RadialMenu';

export default function ThemeSelection() {
  const { theme, setTheme } = useTheme();
  const { transitionToPhase } = usePhase();

  const themeOptions: RadialOption[] = [
    {
      id: 'terminal',
      label: 'Terminal',
      description: 'Classic hacker aesthetic with green monospace text',
      icon: '💻',
      preview: `> system_init.exe
> loading_modules...
> access_granted`
    },
    {
      id: 'neon',
      label: 'Neon',
      description: 'Cyberpunk vibes with electric blue and pink highlights',
      icon: '🌆',
      preview: `◉ Neural link established
◉ Cyber interface active
◉ Ready for interaction`
    },
    {
      id: 'clean',
      label: 'Clean',
      description: 'Minimal modern design for professional environments',
      icon: '✨',
      preview: `● System Status: Online
● User Interface: Ready
● Access Level: Granted`
    }
  ];

  const handleThemeSelect = (themeId: string) => {
    setTheme(themeId as any);
    
    // Transition to cursor selection after a brief delay
    setTimeout(() => {
      transitionToPhase('CURSOR_SELECT', 800);
    }, 1000);
  };

  return (
    <RadialMenu
      title="Select Interface Theme"
      subtitle="Choose your visual experience"
      options={themeOptions}
      onSelect={handleThemeSelect}
      selectedId={theme}
    />
  );
}
