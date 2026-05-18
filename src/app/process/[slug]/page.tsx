'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import styles from '../../page.module.css';

export default function ProcessPage() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop()?.replace(/-/g, ' ') || 'Process';
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className={styles.main} style={{ background: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container" style={{ paddingTop: '8rem' }}>
        <div className="glass-card" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', textAlign: 'left' }}>Timeline Step: {title}</h2>
          <div style={{ width: '50px', height: '4px', background: 'var(--accent)', marginBottom: '2rem' }}></div>
          
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
            This page provides an in-depth explanation of the "{title}" phase in our AI project development lifecycle. 
            During this phase, Hamad, Saif, and Anas collaborated to research, design, and implement the necessary AI workflows and user interfaces to bring the Smart Travel Assistant to life.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Objectives</h4>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                <li>Identify key problems.</li>
                <li>Design robust AI models.</li>
                <li>Validate travel datasets.</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Outcomes</h4>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                <li>Successful implementation.</li>
                <li>Seamless UI integration.</li>
                <li>Data-driven results.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
