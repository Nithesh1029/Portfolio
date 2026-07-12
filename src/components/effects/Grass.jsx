const BLOCK_SIZE = 32;

const Grass = ({ className = "" }) => {
  const blocks = Array.from({ length: 60 });

  return (
    <div
      className={`relative h-10 overflow-hidden pointer-events-none ${className}`}
      style={{
        imageRendering: "pixelated",
      }}
    >
      {/* Dirt */}
      <div className="absolute inset-0 bg-[#6b4a2d]" />

      {/* Grass blocks */}
      <div className="absolute top-0 left-0 flex">
        {blocks.map((_, i) => (
          <div
            key={i}
            style={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* Dirt */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "#8b5a2b",
              }}
            />

            {/* Grass top */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 8,
                background: "#59b437",
              }}
            />

            {/* Highlight */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "#86d95a",
              }}
            />

            {/* Dirt pixels */}
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 6,
                width: 4,
                height: 4,
                background: "#a36a35",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 18,
                left: 18,
                width: 4,
                height: 4,
                background: "#c08444",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 24,
                left: 10,
                width: 3,
                height: 3,
                background: "#5f3c20",
              }}
            />

            {/* Random grass pixels */}
            <div
              style={{
                position: "absolute",
                top: 6,
                left: 8,
                width: 3,
                height: 2,
                background: "#4c9d2d",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 4,
                left: 20,
                width: 4,
                height: 2,
                background: "#72d64d",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grass;