'use client';

import styles from './RadarMap.module.css';

interface Flight {
  icao24: string;
  callsign: string;
  origin_country: string;
  longitude: number;
  latitude: number;
  velocity: number;
  altitude: number;
}

export default function RadarMap() {
  return (
    <div className={`${styles.radarContainer} glass animate-fade-in`}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.icon}>🛰️</span>
          <div>
            <h3>Live Global Air Traffic</h3>
            <p>Real-time aircraft positions by FlightRadar24</p>
          </div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <iframe 
          src="https://www.flightradar24.com/simple_index.php?lat=24.4&lon=54.3&z=8&airports=1&label1=callsign" 
          width="100%" 
          height="100%" 
          style={{ border: 'none', borderRadius: '12px' }}
          title="Live Flight Radar"
        ></iframe>
      </div>
    </div>
  );
}
