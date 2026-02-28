const ranks = [
  {
    name: 'Novice',
    emoji: '🌱',
    color: 'oklch(0.60 0.15 145)',
    borderColor: 'oklch(0.40 0.12 145)',
    bgColor: 'oklch(0.14 0.06 145)',
    description: 'Begin your journey',
    tier: 1,
  },
  {
    name: 'Expert',
    emoji: '⚔️',
    color: 'oklch(0.60 0.18 220)',
    borderColor: 'oklch(0.42 0.15 220)',
    bgColor: 'oklch(0.14 0.06 220)',
    description: 'Sharpen your skills',
    tier: 2,
  },
  {
    name: 'Master',
    emoji: '🔥',
    color: 'oklch(0.65 0.22 25)',
    borderColor: 'oklch(0.45 0.18 25)',
    bgColor: 'oklch(0.14 0.06 25)',
    description: 'Command the battlefield',
    tier: 3,
  },
  {
    name: 'Champion',
    emoji: '🏆',
    color: 'oklch(0.72 0.20 80)',
    borderColor: 'oklch(0.52 0.18 80)',
    bgColor: 'oklch(0.14 0.06 80)',
    description: 'Rise above the rest',
    tier: 4,
  },
  {
    name: 'Legend',
    emoji: '👑',
    color: 'oklch(0.75 0.22 295)',
    borderColor: 'oklch(0.55 0.22 295)',
    bgColor: 'oklch(0.18 0.10 295)',
    description: 'Forge your legacy',
    tier: 5,
  },
];

export default function RanksSection() {
  return (
    <section
      id="ranks"
      className="py-24 relative overflow-hidden"
      style={{ background: 'oklch(0.10 0.05 295)' }}
    >
      <div className="absolute inset-0 block-texture opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-1 mb-4 font-pixel"
            style={{
              background: 'oklch(0.20 0.10 295)',
              border: '2px solid oklch(0.40 0.18 295)',
              color: 'oklch(0.70 0.20 295)',
              fontSize: '0.5rem',
              letterSpacing: '0.15em',
            }}
          >
            PROGRESSION
          </div>
          <h2
            className="font-pixel mb-4"
            style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)',
              color: 'oklch(0.97 0.01 295)',
              lineHeight: '1.8',
              textShadow: '3px 3px 0 oklch(0.10 0.04 295)',
            }}
          >
            Server Ranks
          </h2>
          <p
            style={{
              fontFamily: '"VT323", monospace',
              fontSize: '1.2rem',
              color: 'oklch(0.60 0.10 295)',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            All ranks are completely free — earn your place through skill and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ranks.map((rank) => (
            <div
              key={rank.name}
              className="relative flex flex-col items-center text-center p-6 transition-all duration-300 cursor-default"
              style={{
                background: rank.bgColor,
                border: `2px solid ${rank.borderColor}`,
                boxShadow: `4px 4px 0 oklch(0.07 0.03 295)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = rank.color;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = rank.borderColor;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: rank.color }}
              />

              <div
                className="w-14 h-14 flex items-center justify-center mb-4 mt-2"
                style={{
                  background: 'oklch(0.10 0.04 295)',
                  border: `2px solid ${rank.color}`,
                  fontSize: '1.6rem',
                }}
              >
                {rank.emoji}
              </div>

              <div
                className="font-pixel mb-1"
                style={{
                  fontSize: '0.65rem',
                  color: rank.color,
                  textShadow: `1px 1px 0 oklch(0.08 0.03 295)`,
                  letterSpacing: '0.08em',
                }}
              >
                {rank.name}
              </div>

              <p
                className="mb-4"
                style={{
                  fontFamily: '"VT323", monospace',
                  fontSize: '0.95rem',
                  color: 'oklch(0.60 0.08 295)',
                  lineHeight: '1.4',
                }}
              >
                {rank.description}
              </p>

              <div
                className="mt-auto px-3 py-1 font-pixel"
                style={{
                  background: 'oklch(0.10 0.04 295)',
                  border: `1px solid ${rank.borderColor}`,
                  color: 'oklch(0.65 0.18 145)',
                  fontSize: '0.42rem',
                  letterSpacing: '0.08em',
                }}
              >
                FREE • NO PRIZE
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 text-center p-5"
          style={{
            background: 'oklch(0.13 0.06 295)',
            border: '2px solid oklch(0.25 0.10 295)',
          }}
        >
          <p
            style={{
              fontFamily: '"VT323", monospace',
              fontSize: '1.1rem',
              color: 'oklch(0.55 0.10 295)',
            }}
          >
            ★ Ranks are earned through gameplay — no purchases required. Play, improve, and climb the ladder!
          </p>
        </div>
      </div>
    </section>
  );
}
