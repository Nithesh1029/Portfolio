import { useEffect, useState } from 'react';
import { useFirstVisit } from '../../hooks/useFirstVisit';

const DURATION_MS = 1000;

const LoadingScreen = () => {
  const { isFirstVisit, checked } = useFirstVisit();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!checked || !isFirstVisit) return;

    setVisible(true);
    const exitTimer = setTimeout(() => setExiting(true), DURATION_MS);
    const removeTimer = setTimeout(() => setVisible(false), DURATION_MS + 300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [checked, isFirstVisit]);

  if (!checked || !isFirstVisit || !visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={[
        'fixed inset-0 z-[var(--z-loading)]',
        'flex flex-col items-center justify-center gap-[var(--space-block-4)]',
        'bg-[var(--color-void)] text-center px-[var(--space-block-4)]',
        'transition-opacity duration-300 ease-out',
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100',
      ].join(' ')}
    >
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-[var(--text-display-md)] text-[var(--color-parchment)]">
          Welcome to Nithesh&apos;s World
        </h1>
        <p className="font-[family-name:var(--font-body)] text-[var(--color-parchment-muted)] mt-[var(--space-block-2)] text-sm">
          Crafting software, one block at a time.
        </p>
      </div>

      <div className="w-full max-w-xs">
        <p className="font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment-muted)] mb-[var(--space-block-2)]">
          Generating World...
        </p>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Loading"
          className="h-4 w-full bg-[var(--color-surface)] border-pixel bevel-in overflow-hidden"
        >
          <div
            className="h-full bg-[var(--color-grass)] anim-fill-bar motion-reduce:animate-none motion-reduce:w-full"
            style={{ animationDuration: `${DURATION_MS}ms` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;