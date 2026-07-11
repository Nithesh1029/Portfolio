import { forwardRef } from 'react';

const VARIANT_CLASSES = {
  primary: 'bg-[var(--color-grass)] hover:bg-[var(--color-grass-light)] active:bg-[var(--color-grass-dark)] text-[var(--color-parchment)]',
  accent: 'bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] active:bg-[var(--color-gold-dark)] text-[var(--color-void)]',
  secondary: 'bg-[var(--color-surface)] border-pixel-diamond hover:bg-[var(--color-diamond)] hover:text-[var(--color-void)] text-[var(--color-parchment)]',
  ghost: 'bg-transparent border-pixel hover:border-[var(--color-parchment-muted)] text-[var(--color-parchment)]',
};

const SIZE_CLASSES = {
  sm: 'px-[var(--space-block-2)] py-[var(--space-block)] text-xs',
  md: 'px-[var(--space-block-3)] py-[var(--space-block-2)] text-sm',
  lg: 'px-[var(--space-block-4)] py-[var(--space-block-2)] text-base',
};

const PixelButton = forwardRef(function PixelButton(
  {
    children,
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    icon: Icon,
    className = '',
    ...props
  },
  ref
) {
  const classes = [
    'inline-flex items-center justify-center gap-[var(--space-block)]',
    'font-[family-name:var(--font-display)] select-none',
    'bevel-out active:bevel-in active:translate-y-px',
    'transition-colors duration-150',
    'disabled:opacity-50 disabled:pointer-events-none',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(' ');

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {Icon && <Icon aria-hidden="true" />}
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} type="button" className={classes} {...props}>
      {Icon && <Icon aria-hidden="true" />}
      {children}
    </button>
  );
});

export default PixelButton;