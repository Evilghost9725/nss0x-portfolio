import React, { ReactNode } from 'react';
import styles from './LiquidGlass.module.css';

interface LiquidGlassProps {
  children: ReactNode;
  variant?: 'button' | 'card' | 'dock';
  className?: string;
}

export default function LiquidGlass({ children, variant = 'button', className = '' }: LiquidGlassProps) {
  return (
    <div className={`${styles.liquidGlassWrapper} ${styles[variant]} ${className}`}>
      <div className={styles.liquidGlassEffect}></div>
      <div className={styles.liquidGlassTint}></div>
      <div className={styles.liquidGlassShine}></div>
      <div className={styles.liquidGlassText}>
        {children}
      </div>
      
      {/* SVG Filter - only render once */}
      <svg style={{ display: 'none' }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>

          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>

          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
}
