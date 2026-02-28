import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import JoinServerModal from '../JoinServerModal';
import LearnMoreModal from '../LearnMoreModal';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'oklch(0.08 0.04 295)' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/generated/hero-banner.dim_1440x600.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />

        <div className="absolute inset-0 star-bg" />

        <div className="absolute inset-0 hero-overlay" />

        <div className="absolute inset-0 block-texture opacity-30" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 opacity-40"
              style={{
                background: 'oklch(0.62 0.22 295)',
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`,
                animation: `float ${2.5 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                imageRendering: 'pixelated',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-none border"
            style={{
              background: 'oklch(0.20 0.10 295 / 0.8)',
              borderColor: 'oklch(0.45 0.20 295)',
              color: 'oklch(0.80 0.18 295)',
              fontFamily: '"VT323", monospace',
              fontSize: '1.1rem',
              letterSpacing: '0.1em',
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'oklch(0.65 0.22 145)' }} />
            SERVER ONLINE • JOIN NOW
          </div>

          <h1
            className="font-pixel mb-6 leading-tight glow-purple"
            style={{
              fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
              color: 'oklch(0.97 0.01 295)',
              lineHeight: '1.6',
              textShadow: '0 0 30px oklch(0.62 0.22 295 / 0.6), 4px 4px 0 oklch(0.10 0.04 295)',
            }}
          >
            Welcome to
            <br />
            <span
              className="shimmer-text"
              style={{ fontSize: 'clamp(1.5rem, 5vw, 3.2rem)' }}
            >
              ZoritLegends
            </span>
          </h1>

          <p
            className="mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: '"VT323", monospace',
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              color: 'oklch(0.75 0.12 295)',
              letterSpacing: '0.05em',
              lineHeight: '1.5',
            }}
          >
            The ultimate Minecraft experience awaits. Battle, survive, and conquer
            alongside thousands of players in an epic world of legends.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="minecraft-btn px-8 py-4 text-base pulse-glow-anim"
              style={{
                background: 'oklch(0.55 0.25 295)',
                color: 'oklch(0.99 0 0)',
                boxShadow: '0 5px 0 oklch(0.28 0.14 295), inset 0 2px 0 oklch(0.72 0.22 295)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                minWidth: '200px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.62 0.25 295)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.55 0.25 295)';
              }}
            >
              ▶ JOIN SERVER
            </button>

            <button
              onClick={() => setLearnMoreOpen(true)}
              className="minecraft-btn px-8 py-4 text-base"
              style={{
                background: 'oklch(0.22 0.09 295)',
                color: 'oklch(0.85 0.15 295)',
                boxShadow: '0 5px 0 oklch(0.10 0.04 295), inset 0 2px 0 oklch(0.35 0.14 295)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                minWidth: '200px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.28 0.12 295)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.22 0.09 295)';
              }}
            >
              LEARN MORE
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span style={{ fontFamily: '"VT323", monospace', fontSize: '1rem', color: 'oklch(0.50 0.12 295)' }}>
              IP:
            </span>
            <span
              style={{
                fontFamily: '"VT323", monospace',
                fontSize: '1.1rem',
                color: 'oklch(0.65 0.18 295)',
                letterSpacing: '0.05em',
              }}
            >
              mc.zoritlegends.com:60458
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span style={{ fontFamily: '"VT323", monospace', fontSize: '0.9rem', color: 'oklch(0.50 0.12 295)' }}>
            SCROLL
          </span>
          <ChevronDown size={20} style={{ color: 'oklch(0.50 0.12 295)' }} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 pixel-divider" />
      </section>

      <JoinServerModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <LearnMoreModal open={learnMoreOpen} onClose={() => setLearnMoreOpen(false)} />
    </>
  );
}
