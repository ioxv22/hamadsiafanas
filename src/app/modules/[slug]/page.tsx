'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import styles from '../../page.module.css';

export default function ModulePage() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop()?.replace(/-/g, ' ') || 'Module';
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className={styles.main} style={{ background: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{title}</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Welcome to the {title} module. This section is currently being integrated with our AI backend.
        </p>
        <div className="glass-card" style={{ padding: '4rem', maxWidth: '600px', margin: '0 auto' }}>
          <div className="animate-pulse-glow" style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
          <h3 style={{ marginBottom: '1rem' }}>System Initialization</h3>
          <p style={{ color: 'var(--text-muted)' }}>Loading AI models and connecting to live travel datasets...</p>
          <div style={{ marginTop: '2rem', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '50%', height: '100%', background: 'var(--primary)', animation: 'pulse-glow 2s infinite' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
