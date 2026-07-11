export const EASE = {
  out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
};

export const DURATION = {
  fast: 150,
  base: 300,
  slow: 600,
};

export const LENIS_CONFIG = {
  duration: 1.1,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
};

export const fadeInUpStyle = (delayMs = 0) => ({
  animationDelay: `${delayMs}ms`,
});

export const staggerDelay = (index, stepMs = 80) => `${index * stepMs}ms`;