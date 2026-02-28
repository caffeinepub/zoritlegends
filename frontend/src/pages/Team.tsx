import Navbar from '../components/layout/Navbar';
import StaffListSection from '../components/layout/StaffListSection';
import RoleHierarchySection from '../components/layout/RoleHierarchySection';
import Footer from '../components/layout/Footer';
import { SiDiscord } from 'react-icons/si';

export default function Team() {
  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.10 0.04 295)' }}>
      <Navbar />
      <main className="pt-16">
        {/* Discord Join Banner */}
        <div
          className="relative overflow-hidden"
          style={{
            background: 'oklch(0.13 0.08 270)',
            borderBottom: '2px solid oklch(0.32 0.18 270)',
          }}
        >
          <div className="absolute inset-0 block-texture opacity-10" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
              <SiDiscord
                size={22}
                style={{ color: 'oklch(0.72 0.18 270)', flexShrink: 0 }}
              />
              <p
                style={{
                  fontFamily: '"VT323", monospace',
                  fontSize: '1.25rem',
                  color: 'oklch(0.88 0.08 270)',
                  lineHeight: 1.4,
                }}
              >
                ★ Interested in joining the team?{' '}
                <a
                  href="https://discord.gg/UGCjrpj7Jg"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'oklch(0.72 0.22 270)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'oklch(0.88 0.22 270)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.22 270)';
                  }}
                >
                  Apply in our Discord server!
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Role Hierarchy Section — placed above the full staff roster */}
        <RoleHierarchySection />

        <StaffListSection />
      </main>
      <Footer />
    </div>
  );
}
