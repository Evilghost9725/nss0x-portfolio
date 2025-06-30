import { useCursor } from '@/hooks/useCursor';
import { usePhase } from '@/hooks/usePhase';
import { CursorType } from '@/types/appPhases';
import RadialMenu, { RadialOption } from '@/components/ui/RadialMenu';

export default function CursorSelection() {
  const { cursor, setCursor } = useCursor();
  const { transitionToPhase } = usePhase();

  const cursorOptions: RadialOption[] = [
    {
      id: 'default',
      label: 'Default',
      description: 'Standard pointer for general navigation',
      icon: '👆',
      preview: 'Standard arrow cursor\nSuitable for all interactions'
    },
    {
      id: 'crosshair',
      label: 'Crosshair',
      description: 'Precision targeting for detailed work',
      icon: '🎯',
      preview: 'Precision crosshair\nIdeal for targeting and selection'
    },
    {
      id: 'pointer',
      label: 'Interactive',
      description: 'Touch-friendly pointer for mobile devices',
      icon: '👍',
      preview: 'Enhanced pointer\nOptimized for touch interfaces'
    }
  ];

  const handleCursorSelect = (cursorId: string) => {
    setCursor(cursorId as CursorType);
    
    // Transition to system ready after a brief delay
    setTimeout(() => {
      transitionToPhase('SYSTEM_READY', 800);
    }, 1000);
  };

  return (
    <RadialMenu
      title="Choose Cursor Style"
      subtitle="Select your interaction method"
      options={cursorOptions}
      onSelect={handleCursorSelect}
      selectedId={cursor}
    />
  );
}
