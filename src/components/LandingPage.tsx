import { usePhase } from '@/hooks/usePhase';
import ThemeCard from '@/components/ui/ThemeCard';
import CursorCard from '@/components/ui/CursorCard';
import LiquidGlass from '@/components/ui/LiquidGlass';
import styles from '@/styles/LandingPage.module.css';

export default function LandingPage() {
  const { transitionToPhase, isLoading } = usePhase();

  const handleEnterSystem = () => {
    transitionToPhase('BOOTING', 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>nss0x</span> Portfolio System
          </h1>
          <p className={styles.subtitle}>
            Initialize your retro-futuristic experience
          </p>
        </header>

        {/* Theme Selection */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Select Interface Theme</h2>
          <div className={styles.themeGrid}>
            <ThemeCard
              theme="terminal"
              title="Terminal"
              description="Classic hacker aesthetic with green monospace text"
              preview={`> system_init.exe\n> loading_modules...\n> access_granted`}
            />
            <ThemeCard
              theme="neon"
              title="Neon"
              description="Cyberpunk vibes with electric blue and pink highlights"
              preview={`◉ Neural link established\n◉ Cyber interface active\n◉ Ready for interaction`}
            />
            <ThemeCard
              theme="clean"
              title="Clean"
              description="Minimal modern design for professional environments"
              preview={`● System Status: Online\n● User Interface: Ready\n● Access Level: Granted`}
            />
          </div>
        </section>

        {/* Cursor Selection */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Choose Cursor Style</h2>
          <div className={styles.cursorGrid}>
            <CursorCard
              cursorType="default"
              title="Default"
              description="Standard pointer"
            />
            <CursorCard
              cursorType="crosshair"
              title="Crosshair"
              description="Precision targeting"
            />
            <CursorCard
              cursorType="pointer"
              title="Interactive"
              description="Touch-friendly"
            />
          </div>
        </section>

        {/* Enter Button */}
        <section className={styles.enterSection}>
          <LiquidGlass variant="button">
            <button 
              className={styles.enterButton}
              onClick={handleEnterSystem}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.loading}>
                  <span className={styles.loadingDots}>...</span>
                  Initializing System
                </span>
              ) : (
                <span className={styles.enterText}>Enter System</span>
              )}
            </button>
          </LiquidGlass>
          <p className={styles.enterHint}>
            Begin your interactive portfolio experience
          </p>
        </section>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
    </div>
  );
}
