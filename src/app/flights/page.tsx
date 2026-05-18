'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from '../page.module.css';

export default function FlightsPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [fromLocation, setFromLocation] = useState('DXB');
  const [toLocation, setToLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Dynamic generation based on inputs
    const dest = toLocation.trim() || 'LHR';
    const origin = fromLocation.trim() || 'DXB';
    const destCode = dest.length <= 3 ? dest.toUpperCase() : dest.charAt(0).toUpperCase() + dest.slice(1);
    const originCode = origin.length <= 3 ? origin.toUpperCase() : origin.charAt(0).toUpperCase() + origin.slice(1);

    setTimeout(() => {
      setResults([
        { id: 1, airline: 'Emirates', from: originCode, to: destCode, price: 2500, time: '08:00 AM - 12:30 PM', duration: '7h 30m', class: 'Economy' },
        { id: 2, airline: 'Etihad', from: originCode, to: destCode, price: 2100, time: '10:00 AM - 02:45 PM', duration: '7h 45m', class: 'Economy' },
        { id: 3, airline: 'Qatar Airways', from: originCode, to: destCode, price: 1800, time: '06:00 AM - 11:15 AM', duration: '7h 15m', class: 'Economy' },
      ]);
      setLoading(false);
    }, 400); 
  };

  return (
    <main className={styles.main} style={{ background: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container" style={{ paddingTop: '8rem' }}>
        <h2>Global Flight Search Engine</h2>
        <form onSubmit={handleSearch} className="glass-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr auto', gap: '1rem', alignItems: 'end', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>From</label>
            <input type="text" placeholder="Origin City/Airport" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>To</label>
            <input type="text" placeholder="Destination" value={toLocation} onChange={(e) => setToLocation(e.target.value)} required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Date</label>
            <input type="date" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Class</label>
            <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }}>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--text-muted)' }}>Passengers</label>
            <input type="number" defaultValue={1} min={1} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Searching...' : 'Search Flights'}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', padding: '1rem', background: 'rgba(0,255,170,0.1)', border: '1px solid var(--primary)', borderRadius: '8px' }}>
          <div style={{ fontSize: '2rem' }}>👨‍👩‍👧‍👦</div>
          <div>
            <h4 style={{ color: 'var(--primary)', margin: 0 }}>Year of Family 2026 Mode</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Displaying family-friendly seating, extra baggage options, and child/elderly assistance.</p>
          </div>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div className="animate-pulse-glow" style={{ fontSize: '2rem' }}>✈️ Accessing Global Aviation Databases...</div>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {results.map(flight => (
              <div key={flight.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
                <div>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{flight.airline}</h3>
                  <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)' }}>
                    <span><strong>{flight.from}</strong> ➔ <strong>{flight.to}</strong></span>
                    <span>{flight.time}</span>
                    <span>⏱ {flight.duration}</span>
                    <span>💺 {flight.class}</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>AED {flight.price}</div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Compare</button>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => alert(`Booking initiated for ${flight.airline}. Booking ID generated.`)}>Book Ticket</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
