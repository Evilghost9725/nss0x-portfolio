import { CursorType } from '@/types/appPhases';
import { useCursor } from '@/hooks/useCursor';
import LiquidGlass from './LiquidGlass';
import styles from './CursorCard.module.css';

interface CursorCardProps {
  cursorType: CursorType;
  title: string;
  description: string;
}

export default function CursorCard({ cursorType, title, description }: CursorCardProps) {
  const { cursor: currentCursor, setCursor } = useCursor();
  const isActive = currentCursor === cursorType;

  const handleClick = () => {
    setCursor(cursorType);
  };

  return (
    <LiquidGlass 
      variant="card"
      className={`${styles.card} ${isActive ? styles.active : ''}`}
    >
      <div 
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        style={{ cursor: cursorType }}
        className={styles.cardContent}
      >
        <div className={styles.preview}>
          <div className={styles.cursorIcon} style={{ cursor: cursorType }}>
            {getCursorIcon(cursorType)}
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.indicator}>
          {isActive && <div className={styles.activeIndicator} />}
        </div>
      </div>
    </LiquidGlass>
  );
}

function getCursorIcon(cursorType: CursorType): string {
  switch (cursorType) {
    case 'default':
      return '↖';
    case 'crosshair':
      return '✛';
    case 'pointer':
      return '👆';
    default:
      return '↖';
  }
}
