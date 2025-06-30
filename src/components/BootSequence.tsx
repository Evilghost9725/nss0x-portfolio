import { useEffect, useState, useMemo } from 'react';
import { usePhase } from '@/hooks/usePhase';
import styles from '@/styles/BootSequence.module.css';

interface BootLog {
  id: number;
  text: string;
  delay: number;
  isLoading?: boolean;
  progress?: number;
}

export default function BootSequence() {
  const { transitionToPhase } = usePhase();
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<BootLog[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);

  const bootLogs = useMemo(() => [
    { id: 1, text: "NSS0X Portfolio System v2.1.0", delay: 500 },
    { id: 2, text: "Copyright (c) 2025 NSS0X Technologies", delay: 300 },
    { id: 3, text: "Initializing system components...", delay: 600, isLoading: true },
    { id: 4, text: "Loading kernel modules...", delay: 800 },
    { id: 5, text: "Mounting file systems...", delay: 500 },
    { id: 6, text: "Starting network services...", delay: 700 },
    { id: 7, text: "Initializing graphics drivers...", delay: 600 },
    { id: 8, text: "Loading user interface components...", delay: 900, progress: 0 },
    { id: 9, text: "System ready. Launching theme selection...", delay: 1000 },
  ], []);

  useEffect(() => {
    if (currentLogIndex >= bootLogs.length) {
      // Boot sequence complete, transition to theme selection
      setTimeout(() => {
        transitionToPhase('THEME_SELECT', 800);
      }, 1500);
      return;
    }

    const currentLog = bootLogs[currentLogIndex];
    
    const timer = setTimeout(() => {
      setIsTyping(true);
      
      // Simulate typing effect
      setTimeout(() => {
        setVisibleLogs(prev => [...prev, currentLog]);
        setIsTyping(false);
        
        // Handle progress bar for specific logs
        if (currentLog.progress !== undefined) {
          simulateProgress();
        } else {
          setCurrentLogIndex(prev => prev + 1);
        }
      }, 100 + Math.random() * 200); // Simulate typing delay
      
    }, currentLog.delay);

    return () => clearTimeout(timer);
  }, [currentLogIndex, transitionToPhase, bootLogs]);

  const simulateProgress = () => {
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 15 + 5; // Random progress increments
      
      if (progress >= 100) {
        progress = 100;
        setCurrentProgress(100);
        clearInterval(progressInterval);
        setTimeout(() => {
          setCurrentLogIndex(prev => prev + 1);
        }, 500);
      } else {
        setCurrentProgress(progress);
      }
    }, 150);
  };

  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <div className={styles.titleBar}>
            <div className={styles.buttons}>
              <span className={styles.button}></span>
              <span className={styles.button}></span>
              <span className={styles.button}></span>
            </div>
            <span className={styles.title}>NSS0X System Terminal</span>
          </div>
        </div>
        
        <div className={styles.content}>
          {visibleLogs.map((log) => (
            <div key={log.id} className={styles.logLine}>
              <span className={styles.prompt}>root@nss0x:~$</span>
              <span className={styles.command}>{log.text}</span>
              {log.isLoading && (
                <span className={styles.loadingDots}>
                  <span>.</span><span>.</span><span>.</span>
                </span>
              )}
            </div>
          ))}
          
          {/* Progress bar for loading operations */}
          {currentProgress > 0 && currentProgress < 100 && (
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${currentProgress}%` }}
                ></div>
              </div>
              <span className={styles.progressText}>{Math.round(currentProgress)}%</span>
            </div>
          )}
          
          {/* Typing cursor */}
          {isTyping && (
            <div className={styles.logLine}>
              <span className={styles.prompt}>root@nss0x:~$</span>
              <span className={styles.cursor}>_</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Background matrix effect */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridPattern}></div>
      </div>
    </div>
  );
}
