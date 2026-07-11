const CLOUD_LAYERS = [
  { top: '10%', scale: 1, duration: '50s', delay: '0s', opacity: 0.9 },
  { top: '22%', scale: 0.7, duration: '65s', delay: '-20s', opacity: 0.7 },
  { top: '6%', scale: 0.5, duration: '80s', delay: '-40s', opacity: 0.5 },
];

const Cloud = ({ top, scale, duration, delay, opacity }) => (
  <div
    aria-hidden="true"
    className="absolute anim-float-cloud motion-reduce:hidden"
    style={{
      top,
      opacity,
      transform: `scale(${scale})`,
      animationDuration: duration,
      animationDelay: delay,
    }}
  >
    <svg width="140" height="60" viewBox="0 0 140 60" fill="none">
      <rect x="20" y="20" width="100" height="24" fill="var(--color-parchment)" />
      <rect x="35" y="8" width="50" height="16" fill="var(--color-parchment)" />
      <rect x="10" y="30" width="20" height="14" fill="var(--color-parchment)" />
      <rect x="110" y="30" width="20" height="14" fill="var(--color-parchment)" />
    </svg>
  </div>
);

const Clouds = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={['absolute inset-0 overflow-hidden pointer-events-none', className].join(' ')}
    >
      {CLOUD_LAYERS.map((cloud, i) => (
        <Cloud key={i} {...cloud} />
      ))}
    </div>
  );
};

export default Clouds;