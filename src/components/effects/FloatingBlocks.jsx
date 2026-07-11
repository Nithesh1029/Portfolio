const BLOCK_COLORS = [
  'var(--color-dirt)',
  'var(--color-stone)',
  'var(--color-grass)',
];

const DEFAULT_BLOCKS = [
  { size: 28, top: '15%', left: '8%', duration: '7s', delay: '0s' },
  { size: 18, top: '55%', left: '4%', duration: '9s', delay: '-2s' },
  { size: 22, top: '30%', left: '90%', duration: '8s', delay: '-4s' },
  { size: 16, top: '70%', left: '92%', duration: '6.5s', delay: '-1s' },
];

const FloatingBlocks = ({ blocks = DEFAULT_BLOCKS, className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={['absolute inset-0 overflow-hidden pointer-events-none', className].join(' ')}
    >
      {blocks.map((block, i) => (
        <span
          key={i}
          className="absolute anim-pulse-glow motion-reduce:animate-none"
          style={{
            top: block.top,
            left: block.left,
            width: block.size,
            height: block.size,
            backgroundColor: BLOCK_COLORS[i % BLOCK_COLORS.length],
            border: '2px solid var(--border-dark)',
            boxShadow: 'var(--shadow-bevel-out)',
            animationDuration: block.duration,
            animationDelay: block.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBlocks;
