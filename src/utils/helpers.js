export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function scrollToId(id, offset = 0) {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}