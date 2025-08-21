export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: 'easeInOut' | 'easeOut' | 'easeIn' | 'cubic-bezier(0.68, -0.55, 0.27, 1.55)';
  repeat?: number;
  yoyo?: boolean;
}

export interface ScrollTriggerConfig {
  trigger: string | Element;
  start: string;
  end: string;
  scrub?: boolean;
  pin?: boolean;
  toggleActions?: 'play none none reverse' | 'restart pause resume pause';
}

export interface StaggerConfig {
  amount: number;
  from?: 'start' | 'center' | 'end' | number;
  grid?: [number, number];
  axis?: 'x' | 'y';
}

export interface ParallaxOptions {
  speed: number;
  direction?: 'vertical' | 'horizontal';
  smooth?: boolean;
}

export interface MagneticOptions {
  strength: number;
  radius: number;
  ease: 'easeInOut' | 'easeOut' | 'easeIn';
}

export type EasingFunction = 
  | 'linear'
  | 'easeInOut'
  | 'easeOut'
  | 'easeIn'
  | 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
  | 'back.out'
  | 'elastic.out'
  | 'bounce.out'
  | 'circ.out'
  | 'expo.out'
  | 'sine.out';

export interface TimelineConfig {
  repeat?: number;
  yoyo?: boolean;
  delay?: number;
  paused?: boolean;
}