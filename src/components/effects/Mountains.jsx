import { useMemo } from 'react';

const BLOCK = 16;

// Deterministic pseudo-random in [0, 1) — no Math.random, so the terrain
// is stable across re-renders/StrictMode double-invocation.
function hash(seed) {
  const n = Math.sin(seed * 12.9898) * 43758.5453;
  return n - Math.floor(n);
}

// Random-walk heightmap so ridgelines feel continuous rather than pure noise.
function generateRidge(seed, columns, min, max, maxStep = 2) {
  const heights = [];
  let h = min + Math.floor(hash(seed) * (max - min));
  for (let i = 0; i < columns; i++) {
    const step = Math.floor(hash(seed + i * 7.13) * (maxStep * 2 + 1)) - maxStep;
    h = Math.min(max, Math.max(min, h + step));
    heights.push(h);
  }
  return heights;
}

function buildLayer({
  seed,
  columns,
  minH,
  maxH,
  snowAt,
  stoneColor,
  dirtColor,
  dirtPatchColor,
  grassColor,
  snowColor,
  caveColumn,
  treeColumns,
  oreColumns,
  oreColors,
}) {
  const heights = generateRidge(seed, columns, minH, maxH);
  const maxHeight = Math.max(...heights);
  const blocks = [];

  heights.forEach((h, col) => {
    const isSnow = h >= snowAt;
    const dirtDepth = h >= 4 ? 2 : 1;

    for (let row = 0; row < h; row++) {
      const isTop = row === h - 1;
      const isDirtBand = row >= h - 1 - dirtDepth && !isTop;

      // Occasional exposed dirt patch on stone cliff faces.
      const isDirtPatch =
        !isTop && !isDirtBand && hash(seed + col * 3.7 + row * 5.3) > 0.94;

      let fill = stoneColor;
      if (isTop) fill = isSnow ? snowColor : grassColor;
      else if (isDirtBand || isDirtPatch) fill = isDirtPatch ? dirtPatchColor : dirtColor;

      // Cave notch: carve a couple of dark blocks into a stone face.
      const isCave =
        caveColumn != null &&
        col === caveColumn &&
        row >= 1 &&
        row <= 2 &&
        h > 4;

      blocks.push({
        key: `${col}-${row}`,
        x: col * BLOCK,
        y: (maxHeight - h + (h - 1 - row)) * BLOCK,
        fill: isCave ? 'var(--color-void)' : fill,
      });
    }

    // Sparse ore glints embedded in the stone body.
    if (oreColumns?.includes(col) && h > 6) {
      const oreRow = 1 + Math.floor(hash(seed + col) * (h - 4));
      blocks.push({
        key: `ore-${col}`,
        x: col * BLOCK + BLOCK / 4,
        y: (maxHeight - h + (h - 1 - oreRow)) * BLOCK + BLOCK / 4,
        fill: oreColors[col % oreColors.length],
        size: BLOCK / 2,
      });
    }

    // Subtle spruce silhouettes on select grass peaks.
    if (treeColumns?.includes(col) && !isSnow) {
      const baseY = (maxHeight - h) * BLOCK;
      const trunkX = col * BLOCK + BLOCK / 2 - 2;
      blocks.push(
        { key: `tree-canopy-1-${col}`, x: col * BLOCK, y: baseY - BLOCK * 2, fill: 'var(--color-grass-dark)', w: BLOCK, hgt: BLOCK },
        { key: `tree-canopy-2-${col}`, x: col * BLOCK + 4, y: baseY - BLOCK, fill: 'var(--color-grass-dark)', w: BLOCK - 8, hgt: BLOCK * 0.6 },
        { key: `tree-trunk-${col}`, x: trunkX, y: baseY, fill: 'var(--color-dirt-dark)', w: 4, hgt: BLOCK * 0.5 }
      );
    }
  });

  return { blocks, width: columns * BLOCK, height: maxHeight * BLOCK };
}

const LAYERS = [
  {
    key: 'back',
    seed: 4.2,
    columns: 42,
    minH: 6,
    maxH: 15,
    snowAt: 12,
    heightClass: 'h-40 sm:h-48',
    stoneMix: 'color-mix(in srgb, var(--color-stone) 55%, var(--color-void) 45%)',
    dirtColor: 'var(--color-dirt-dark)',
    dirtPatchColor: 'color-mix(in srgb, var(--color-dirt-dark) 70%, var(--color-void) 30%)',
    grassColor: 'var(--color-grass-dark)',
    snowColor: 'color-mix(in srgb, var(--color-parchment) 85%, var(--color-diamond-light) 15%)',
    oreColumns: [9, 23, 34],
    oreColors: ['var(--color-diamond)', 'var(--color-gold)', 'var(--color-redstone)'],
  },
  {
    key: 'mid',
    seed: 17.8,
    columns: 34,
    minH: 4,
    maxH: 10,
    snowAt: 999,
    heightClass: 'h-32 sm:h-40',
    stoneMix: 'var(--color-stone)',
    dirtColor: 'var(--color-dirt)',
    dirtPatchColor: 'color-mix(in srgb, var(--color-dirt) 75%, var(--color-void) 25%)',
    grassColor: 'var(--color-grass)',
    snowColor: 'var(--color-parchment)',
    caveColumn: 14,
    treeColumns: [5, 27],
  },
  {
    key: 'front',
    seed: 31.5,
    columns: 26,
    minH: 2,
    maxH: 6,
    snowAt: 999,
    heightClass: 'h-20 sm:h-24',
    stoneMix: 'color-mix(in srgb, var(--color-stone) 85%, var(--color-parchment) 15%)',
    dirtColor: 'var(--color-dirt-light)',
    dirtPatchColor: 'var(--color-dirt)',
    grassColor: 'var(--color-grass-light)',
    snowColor: 'var(--color-parchment)',
    treeColumns: [3, 11, 19],
  },
];

const MountainLayer = ({ config, opacity }) => {
  const { blocks, width, height } = useMemo(
    () =>
      buildLayer({
        seed: config.seed,
        columns: config.columns,
        minH: config.minH,
        maxH: config.maxH,
        snowAt: config.snowAt,
        stoneColor: config.stoneMix,
        dirtColor: config.dirtColor,
        dirtPatchColor: config.dirtPatchColor,
        grassColor: config.grassColor,
        snowColor: config.snowColor,
        caveColumn: config.caveColumn,
        treeColumns: config.treeColumns,
        oreColumns: config.oreColumns,
        oreColors: config.oreColors,
      }),
    [config]
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={`absolute inset-x-0 bottom-0 w-full ${config.heightClass}`}
      style={{ opacity }}
      shapeRendering="crispEdges"
    >
      {blocks.map((b) => (
        <rect
          key={b.key}
          x={b.x}
          y={b.y}
          width={b.size ?? b.w ?? BLOCK}
          height={b.size ?? b.hgt ?? BLOCK}
          fill={b.fill}
        />
      ))}
    </svg>
  );
};

const Mountains = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={['absolute inset-x-0 bottom-0 h-48 sm:h-56 overflow-hidden pointer-events-none', className].join(' ')}
    >
      <MountainLayer config={LAYERS[0]} opacity={0.75} />
      <MountainLayer config={LAYERS[1]} opacity={0.9} />
      <MountainLayer config={LAYERS[2]} opacity={1} />
    </div>
  );
};

export default Mountains;