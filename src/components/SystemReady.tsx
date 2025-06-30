import { useEffect } from 'react';
import { usePhase } from '@/hooks/usePhase';
import { useTheme } from '@/hooks/useTheme';
import LiquidGlass from '@/components/ui/LiquidGlass';
import styles from '@/styles/SystemReady.module.css';

export default function SystemReady() {
  const { transitionToPhase } = usePhase();
  const { theme } = useTheme();

  useEffect(() => {
    // Auto-transition to the next phase after showing the ready state
    const timer = setTimeout(() => {
      transitionToPhase('OS_SIMULATION', 1500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [transitionToPhase]);

  const handleContinue = () => {
    transitionToPhase('OS_SIMULATION', 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.statusDisplay}>
          <LiquidGlass variant="card">
            <div className={styles.statusContent}>
              <div className={styles.checkmark}>✓</div>
              <h1 className={styles.title}>System Ready</h1>
              <p className={styles.subtitle}>
                Configuration complete. Welcome to NSS0X Portfolio System.
              </p>
              
              <div className={styles.systemInfo}>
                <div className={styles.infoLine}>
                  <span className={styles.label}>Theme:</span>
                  <span className={styles.value}>{theme.toUpperCase()}</span>
                </div>
                <div className={styles.infoLine}>
                  <span className={styles.label}>Status:</span>
                  <span className={styles.value}>OPERATIONAL</span>
                </div>
                <div className={styles.infoLine}>
                  <span className={styles.label}>Security:</span>
                  <span className={styles.value}>AUTHORIZED</span>
                </div>
              </div>

              <div className={styles.actions}>
                <LiquidGlass variant="button">
                  <button 
                    className={styles.continueButton}
                    onClick={handleContinue}
                  >
                    Continue to Portfolio
                  </button>
                </LiquidGlass>
              </div>
            </div>
          </LiquidGlass>
        </div>

        <div className={styles.backgroundInfo}>
          <div className={styles.infoPanel}>
            <h3>System Specifications</h3>
            <ul>
              <li>Interface: Next.js Portfolio System</li>
              <li>Version: 2.1.0</li>
              <li>Architecture: React + TypeScript</li>
              <li>Security: Liquid Glass Enhanced</li>
              <li>Performance: Optimized</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.successGlow}></div>
        <div className={styles.particleField}></div>
      </div>
    </div>
  );
}
