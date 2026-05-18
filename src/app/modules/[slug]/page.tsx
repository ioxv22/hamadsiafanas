'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import styles from '../../page.module.css';

export default function ModulePage() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop()?.replace(/-/g, ' ') || 'Module';
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  const renderContent = () => {
    switch(slug.toLowerCase().replace(/ /g, '-')) {
      case 'budget-system':
        return (
          <div className="glass-card">
            <h3>💸 Trip Expenses Tracker</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              <div><label>Flight Budget</label><input type="number" placeholder="$1000" style={{ width: '100%', padding: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white' }} /></div>
              <div><label>Hotel Budget</label><input type="number" placeholder="$500" style={{ width: '100%', padding: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white' }} /></div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>Calculate Total</button>
          </div>
        );
      case 'travel-events':
        return (
          <div className="glass-card">
            <h3>📅 Interactive Calendar</h3>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>
              <div><strong>10:00 AM</strong></div>
              <div>Visit Louvre Museum</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem' }}>
              <div><strong>02:30 PM</strong></div>
              <div>Lunch at Eiffel Tower</div>
            </div>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>+ Add New Event</button>
          </div>
        );
      case 'journal-feature':
        return (
          <div className="glass-card">
            <h3>📖 My Travel Journal</h3>
            <textarea placeholder="Write about your day in Paris..." rows={6} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', marginTop: '1rem', borderRadius: '8px' }}></textarea>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Save Entry</button>
          </div>
        );
      case 'safety-center':
        return (
          <div className="glass-card" style={{ borderTop: '4px solid #ff4444' }}>
            <h3 style={{ color: '#ff4444' }}>🛡 Emergency Dashboard</h3>
            <div style={{ background: 'rgba(255,0,0,0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
              <strong>Current Location Risk:</strong> LOW
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>General safety protocols apply. No active alerts.</p>
            </div>
            <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>🚓 Police: 999</li>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>🚑 Ambulance: 998</li>
            </ul>
          </div>
        );
      case 'currency-module':
        return (
          <div className="glass-card">
            <h3>💱 Live Exchange Rates</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <input type="number" defaultValue={100} style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', width: '100px' }} />
              <span>AED</span>
              <span>=</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>27.23</span>
              <span>USD</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem' }}>Updated 2 mins ago via AI Market Analysis</p>
          </div>
        );
      case 'ticket-manager':
        return (
          <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--primary)', padding: '0.5rem 2rem', borderBottomLeftRadius: '12px', fontWeight: 'bold' }}>BOARDING PASS</div>
            <h3>🎫 EK001</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>DXB</div>
                <div style={{ color: 'var(--text-muted)' }}>Dubai</div>
              </div>
              <div style={{ fontSize: '2rem', color: 'var(--accent)' }}>✈</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>LHR</div>
                <div style={{ color: 'var(--text-muted)' }}>London</div>
              </div>
            </div>
          </div>
        );
      case 'documents-storage':
        return (
          <div className="glass-card">
            <h3>📁 Secure Vault</h3>
            <div style={{ border: '2px dashed var(--glass-border)', padding: '2rem', textAlign: 'center', borderRadius: '12px', marginTop: '1.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>☁️</div>
              <p>Drag and drop Passport or Visa PDFs here</p>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.5rem 1rem', borderRadius: '8px' }}>📄 Passport_Copy.pdf</div>
            </div>
          </div>
        );
      case 'country-insights':
        return (
          <div className="glass-card">
            <h3>🌍 Destination Info</h3>
            <input type="text" placeholder="Search Country (e.g. Japan)" style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', marginTop: '1rem', borderRadius: '8px' }} />
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Capital:</span> <strong>Tokyo</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Language:</span> <strong>Japanese</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Best Time to Visit:</span> <strong>Spring (Cherry Blossoms)</strong></div>
            </div>
          </div>
        );
      case 'albums':
        return (
          <div className="glass-card">
            <h3>📷 Trip Gallery</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ aspectRatio: '1', backgroundImage: 'url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}></div>
              <div style={{ aspectRatio: '1', backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}></div>
              <div style={{ aspectRatio: '1', backgroundImage: 'url(https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}></div>
            </div>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Upload Photos</button>
          </div>
        );
      default:
        return (
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
            <div className="animate-pulse-glow" style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
            <h3>Module Under Construction</h3>
          </div>
        );
    }
  };

  return (
    <main className={styles.main} style={{ background: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--primary)', textAlign: 'center' }}>{title}</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', textAlign: 'center' }}>
          Smart Travel AI Assistant Interface
        </p>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {renderContent()}
        </div>
      </div>
    </main>
  );
}
