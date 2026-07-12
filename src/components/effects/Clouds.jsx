const CLOUD_LAYERS = [
  { top: "8%", left: 0, scale: 1.2, duration: 60, delay: 0 },
  { top: "20%", left: 350, scale: 0.9, duration: 80, delay: -20 },
  { top: "5%", left: 700, scale: 2, duration: 95, delay: -40 },
  { top: "22%", left: 1000, scale: 1.1, duration: 70, delay: -15 },
  { top: "10%", left: 1300, scale: 1.5, duration: 70, delay: -15 },
];

const PIXEL = 10;

// Each number represents how many white blocks to draw in that row.
const CLOUD_PATTERN = [
  { offset: 3, width: 8 },
  { offset: 1, width: 12 },
  { offset: 0, width: 14 },
  { offset: 1, width: 12 },
  { offset: 3, width: 8 },
];

const CLOUD_COLOR = "#d8dde8";      // Moonlit cloud
const CLOUD_HIGHLIGHT = "#eef2f7";  // Top highlight
const CLOUD_SHADOW = "#aeb7c7";     // Bottom/right shadow

const Cloud = ({ top, left, scale, duration, delay }) => (
  <div
    style={{
      position: "absolute",
      top,
      left,
      animation: `cloudMove ${duration}s linear infinite`,
      animationDelay: `${delay}s`,
      transform: `scale(${scale})`,
      transformOrigin: "top left",
    }}
  >
    <div
      style={{
        position: "relative",
        width: `${14 * PIXEL}px`,
        height: `${5 * PIXEL}px`,
      }}
    >
      {CLOUD_PATTERN.map((row, y) =>
        Array.from({ length: row.width }).map((_, x) => (
          <div
            key={`${y}-${x}`}
style={{
  position: "absolute",
  left: `${(row.offset + x) * PIXEL}px`,
  top: `${y * PIXEL}px`,
  width: `${PIXEL}px`,
  height: `${PIXEL}px`,
  background: CLOUD_COLOR,
  borderTop: `1px solid ${CLOUD_HIGHLIGHT}`,
  borderLeft: `1px solid ${CLOUD_HIGHLIGHT}`,
  borderRight: `1px solid ${CLOUD_SHADOW}`,
  borderBottom: `1px solid ${CLOUD_SHADOW}`,
}}
          />
        ))
      )}
    </div>
  </div>
);

const Clouds = ({ className = "" }) => (
  <>
    <style>{`
      @keyframes cloudMove {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(calc(100vw + 1400px));
        }
      }
    `}</style>

    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {CLOUD_LAYERS.map((cloud, i) => (
        <Cloud key={i} {...cloud} />
      ))}
    </div>
  </>
);

export default Clouds;