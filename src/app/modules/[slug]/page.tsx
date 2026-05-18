'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import styles from '../../page.module.css';

export default function ModulePage() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop()?.replace(/-/g, ' ') || 'Module';
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  return (
    <main className={styles.main} style={{ background: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container" style={{ paddingTop: '8rem' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--primary)', textAlign: 'center' }}>{title}</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', textAlign: 'center' }}>
          Smart Travel AI Assistant is analyzing millions of parameters for you.
        </p>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: status === 'success' ? '1fr 2fr' : '1fr', transition: 'all 0.3s ease' }}>
          <form onSubmit={handleGenerate} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignSelf: 'start' }}>
            <h3>Configuration Panel</h3>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Preferences / Input</label>
              <input type="text" placeholder="e.g. Dubai to Tokyo, Family of 4, Luxury" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Budget Constraint</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }}>
                <option value="student">Student / Low Cost</option>
                <option value="economy">Economy</option>
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ width: '100%', justifyContent: 'center' }}>
              {status === 'loading' ? 'Processing...' : 'Run AI Analysis'}
            </button>
          </form>

          {status === 'loading' && (
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
              <div className="animate-pulse-glow" style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
              <h3>Analyzing Data...</h3>
            </div>
          )}

          {status === 'success' && (
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ color: 'var(--accent)' }}>AI Results Generated</h3>
              
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                <h4>Optimal Recommendation 1</h4>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Based on your inputs, this option offers a 94% match rate combining cost efficiency and high quality.</p>
                <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>Est. Cost: $850</div>
                <button className="btn btn-outline" style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={() => alert('Saved to itinerary!')}>Save to Trip</button>
              </div>

              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid var(--secondary)' }}>
                <h4>Optimal Recommendation 2</h4>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Alternative option providing premium comfort within 10% of your requested parameters.</p>
                <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>Est. Cost: $1,120</div>
                <button className="btn btn-outline" style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={() => alert('Saved to itinerary!')}>Save to Trip</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
