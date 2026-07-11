const BiomeBanner = ({ icon: Icon, label, visible = true, className = '' }) => {
  return (
    <div
      aria-hidden={!visible}
      className={[
        'inline-flex items-center gap-[var(--space-block-2)]',
        'bg-[var(--color-void)]/90 border-pixel bevel-out',
        'px-[var(--space-block-3)] py-[var(--space-block)] backdrop-blur-sm',
        'transition-all duration-300 ease-out',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-2 pointer-events-none',
        'motion-reduce:transition-none',
        className,
      ].join(' ')}
    >
      <Icon aria-hidden="true" className="text-lg text-[var(--color-parchment)]" />
      <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment)] tracking-wide">
        {label}
      </span>
    </div>
  );
};

export default BiomeBanner;