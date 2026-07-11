const BLADE_COUNT = 24;

const Grass = ({ className = '' }) => {
  const blades = Array.from({ length: BLADE_COUNT });

  return (
    <div
      aria-hidden="true"
      className={['absolute inset-x-0 bottom-0 h-16 overflow-hidden pointer-events-none', className].join(' ')}
    >
      <div className="absolute inset-0 bg-[var(--color-grass-dark)]" />
      <div className="absolute inset-x-0 bottom-0 h-full flex items-end justify-around">
        {blades.map((_, i) => (
          <span
            key={i}
            className="anim-wave-grass motion-reduce:animate-none origin-bottom"
            style={{
              animationDelay: `${(i % 6) * 0.3}s`,
              animationDuration: `${2.5 + (i % 4) * 0.4}s`,
            }}
          >
            <svg width="10" height="28" viewBox="0 0 10 28" fill="none">
              <polygon points="5,0 10,28 0,28" fill="var(--color-grass)" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Grass;