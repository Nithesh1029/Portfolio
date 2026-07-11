const Mountains = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={['absolute inset-x-0 bottom-0 pointer-events-none', className].join(' ')}
    >
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        className="w-full h-auto block"
      >
        {/* Back range — deep slate, furthest layer */}
        <polygon
          points="0,260 0,140 180,60 360,150 540,90 720,160 900,70 1080,150 1260,80 1440,150 1440,260"
          fill="var(--color-stone)"
          opacity="0.6"
        />
        {/* Front range — dirt tone, closer layer */}
        <polygon
          points="0,260 0,190 220,110 460,200 680,130 920,210 1160,120 1440,200 1440,260"
          fill="var(--color-dirt-dark)"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};

export default Mountains;