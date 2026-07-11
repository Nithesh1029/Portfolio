const STAR_COUNT = 40;

function seededStars(count) {
  return Array.from({ length: count }).map((_, i) => ({
    top: `${(i * 37) % 100}%`,
    left: `${(i * 53) % 100}%`,
    size: 1 + (i % 3),
    duration: `${2 + (i % 4)}s`,
    delay: `${(i % 5) * 0.4}s`,
  }));
}

const STARS = seededStars(STAR_COUNT);

const Stars = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={['absolute inset-0 overflow-hidden pointer-events-none', className].join(' ')}
    >
      {STARS.map((star, i) => (
        <span
          key={i}
          className="absolute anim-twinkle motion-reduce:animate-none bg-[var(--color-parchment)]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;