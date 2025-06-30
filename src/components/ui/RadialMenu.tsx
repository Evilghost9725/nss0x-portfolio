import { useState } from 'react';
import LiquidGlass from '@/components/ui/LiquidGlass';
import styles from '@/styles/RadialMenu.module.css';

export interface RadialOption {
  id: string;
  label: string;
  description: string;
  icon?: string;
  preview?: string;
}

interface RadialMenuProps {
  title: string;
  subtitle?: string;
  options: RadialOption[];
  onSelect: (optionId: string) => void;
  selectedId?: string;
}

export default function RadialMenu({ 
  title, 
  subtitle, 
  options, 
  onSelect, 
  selectedId 
}: RadialMenuProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (optionId: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    onSelect(optionId);
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const getOptionPosition = (index: number, total: number) => {
    const angle = (360 / total) * index;
    const radians = (angle - 90) * (Math.PI / 180); // Start from top
    const radius = 180; // Distance from center
    
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px)`,
      '--rotation': `${angle}deg`
    } as React.CSSProperties;
  };

  return (
    <div className={styles.container}>
      {/* Center Hub */}
      <div className={styles.centerHub}>
        <LiquidGlass variant="card">
          <div className={styles.hubContent}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            
            {hoveredId && (
              <div className={styles.preview}>
                <h3 className={styles.previewTitle}>
                  {options.find(opt => opt.id === hoveredId)?.label}
                </h3>
                <p className={styles.previewDescription}>
                  {options.find(opt => opt.id === hoveredId)?.description}
                </p>
                {options.find(opt => opt.id === hoveredId)?.preview && (
                  <div className={styles.previewContent}>
                    {options.find(opt => opt.id === hoveredId)?.preview}
                  </div>
                )}
              </div>
            )}
          </div>
        </LiquidGlass>
      </div>

      {/* Radial Options */}
      <div className={styles.radialContainer}>
        {options.map((option, index) => (
          <div
            key={option.id}
            className={`${styles.radialOption} ${
              selectedId === option.id ? styles.selected : ''
            } ${hoveredId === option.id ? styles.hovered : ''}`}
            style={getOptionPosition(index, options.length)}
            onMouseEnter={() => setHoveredId(option.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleSelect(option.id)}
          >
            <LiquidGlass variant="card">
              <div className={styles.optionContent}>
                {option.icon && (
                  <div className={styles.optionIcon}>{option.icon}</div>
                )}
                <span className={styles.optionLabel}>{option.label}</span>
              </div>
            </LiquidGlass>
          </div>
        ))}
      </div>

      {/* Connection Lines */}
      <div className={styles.connectionLines}>
        {options.map((_, index) => (
          <div
            key={index}
            className={styles.connectionLine}
            style={{
              '--angle': `${(360 / options.length) * index - 90}deg`
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.radialGlow}></div>
        <div className={styles.pulseRing}></div>
      </div>
    </div>
  );
}
