import { Theme } from '@/types/appPhases';
import { useTheme } from '@/hooks/useTheme';
import LiquidGlass from './LiquidGlass';
import styles from './ThemeCard.module.css';

interface ThemeCardProps {
  theme: Theme;
  title: string;
  description: string;
  preview: string;
}

export default function ThemeCard({ theme, title, description, preview }: ThemeCardProps) {
  const { theme: currentTheme, setTheme } = useTheme();
  const isActive = currentTheme === theme;

  const handleClick = () => {
    setTheme(theme);
  };

  return (
    <LiquidGlass 
      variant="card"
      className={`${styles.card} ${styles[theme]} ${isActive ? styles.active : ''}`}
    >
      <div 
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        className={styles.cardContent}
      >
        <div className={styles.preview}>
          <div className={styles.previewContent}>
            {preview}
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
