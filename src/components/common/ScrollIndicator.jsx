import { FaChevronDown } from 'react-icons/fa';

const ScrollIndicator = ({ targetId, label = 'Scroll to explore', className = '' }) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        'flex flex-col items-center gap-[var(--space-block)]',
        'text-[var(--color-parchment-muted)] hover:text-[var(--color-parchment)]',
        'transition-colors duration-150',
        className,
      ].join(' ')}
    >
      <span className="font-[family-name:var(--font-display)] text-[0.65rem] tracking-wide">
        {label}
      </span>
      <FaChevronDown
        aria-hidden="true"
        className="animate-bounce motion-reduce:animate-none text-[var(--color-diamond)]"
      />
      <span className="sr-only">Scroll to next section</span>
    </button>
  );
};

export default ScrollIndicator;