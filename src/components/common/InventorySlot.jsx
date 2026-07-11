import { useId, useState } from 'react';

const InventorySlot = ({ icon: Icon, label, status, className = '' }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipId = useId();

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <button
        type="button"
        aria-describedby={tooltipId}
        className={[
          'w-16 h-16 flex items-center justify-center',
          'bg-[var(--color-surface)] border-pixel bevel-out',
          'transition-transform duration-150 hover:-translate-y-0.5 hover:border-[var(--color-diamond)]',
          'motion-reduce:hover:translate-y-0',
          className,
        ].join(' ')}
      >
        <Icon aria-hidden="true" className="text-2xl" />
        <span className="sr-only">{label}</span>
      </button>

      {status && (
        <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-gold)] text-[var(--color-void)] text-[0.6rem] font-[family-name:var(--font-display)] px-1 py-0.5 leading-none">
          {status}
        </span>
      )}

      <span
        id={tooltipId}
        role="tooltip"
        className={[
          'pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full',
          'whitespace-nowrap bg-[var(--color-void)] border-pixel px-[var(--space-block-2)] py-1',
          'text-xs font-[family-name:var(--font-body)] text-[var(--color-parchment)]',
          'transition-opacity duration-150',
          showTooltip ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        {label}
      </span>
    </div>
  );
};

export default InventorySlot;