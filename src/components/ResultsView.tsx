'use client';

import { useState } from 'react';
import styles from './ResultsView.module.css';
import { Plane, Hotel as HotelIcon, Info, X, CheckCircle2, ShieldCheck, Wifi, Coffee, Waves } from 'lucide-react';

interface Flight {
  id: string;
  airline: string;
  origin: string;
  destination: string;
  price: number;
  duration: string;
  baggage: string;
  tags: string[];
  description: string;
}

interface Hotel {
  id: string;
  name: string;
  pricePerNight: number;
  rating: number;
  distanceFromAirport: string;
  tags: string[];
  description: string;
}

interface Package {
  flight: Flight;
  hotel: Hotel;
  totalPrice: number;
  stayDuration: number;
}

export default function ResultsView({ results }: { results: { flights: Flight[], hotels: Hotel[], packages?: Package[] } }) {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  if (results.flights.length === 0 && results.hotels.length === 0 && (!results.packages || results.packages.length === 0)) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🌍</div>
        <h3>Ready to Explore?</h3>
        <p>Type a request like "Find cheapest flight" or "Compare flight + hotel" in the chat.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Packages Section */}
      {results.packages && results.packages.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recommended Packages (Flight + Hotel)</h2>
          <div className={styles.grid}>
            {results.packages.map((p, idx) => (
              <div key={idx} className={`${styles.packageCard} glass animate-fade-in`}>
                <div className={styles.packageBadge}>Best Combo</div>
                <div className={styles.packageHeader}>
                  <h4>{p.flight.airline} + {p.hotel.name}</h4>
                  <span className={styles.totalPrice}>{p.totalPrice} AED</span>
                </div>
                <p className={styles.packageDetails}>
                  Flight to {p.flight.destination} + {p.stayDuration} nights stay.
                </p>
                <div className={styles.packageBreakdown}>
                  <span>✈️ {p.flight.price} AED</span>
                  <span>🏨 {p.hotel.pricePerNight * p.stayDuration} AED</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Flights Section */}
      {results.flights.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Flight Options</h2>
          <div className={styles.grid}>
            {results.flights.map(f => (
              <div key={f.id} className={`${styles.card} card animate-fade-in ${f.tags.includes('Cheapest') ? styles.cheapest : ''}`}>
                {f.tags.includes('Cheapest') && <div className={styles.ribbon}>Cheapest</div>}
                <div className={styles.cardHeader}>
                  <span className={styles.airline}>{f.airline}</span>
                  <span className={styles.price}>{f.price} AED</span>
                </div>
                <div className={styles.route}>{f.origin} ➔ {f.destination}</div>
                <div className={styles.details}>
                  <span>⏱ {f.duration}</span>
                  <span>🧳 {f.baggage}</span>
                </div>
                <div className={styles.tags}>
                  {f.tags.map(t => <span key={t} className={`tag ${t === 'Cheapest' || t === 'Best Value' ? 'tag-highlight' : ''}`}>{t}</span>)}
                </div>
                <p className={styles.description}>{f.description}</p>
                <button 
                  className={styles.viewDetailsBtn}
                  onClick={() => setSelectedItem({ ...f, type: 'flight' })}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hotels Section */}
      {results.hotels.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hotel Recommendations</h2>
          <div className={styles.grid}>
            {results.hotels.map(h => (
              <div key={h.id} className={`${styles.card} card animate-fade-in`}>
                <div className={styles.cardHeader}>
                  <span className={styles.hotelName}>{h.name}</span>
                  <span className={styles.price}>{h.pricePerNight} AED / night</span>
                </div>
                <div className={styles.rating}>⭐ {h.rating} | 📍 {h.distanceFromAirport} from airport</div>
                <div className={styles.tags}>
                  {h.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className={styles.description}>{h.description}</p>
                <button 
                  className={styles.viewDetailsBtn}
                  onClick={() => setSelectedItem({ ...h, type: 'hotel' })}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Details Modal */}
      {selectedItem && (
        <div className={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div className={`${styles.modalContent} glass-card`} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedItem(null)}><X /></button>
            
            <div className={styles.modalHeader}>
              <div className="icon-box">
                {selectedItem.type === 'flight' ? <Plane /> : <HotelIcon />}
              </div>
              <div>
                <h2>{selectedItem.airline || selectedItem.name}</h2>
                <p>{selectedItem.origin ? `${selectedItem.origin} ➔ ${selectedItem.destination}` : `Location: ${selectedItem.distanceFromAirport} from airport`}</p>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.infoGrid}>
                <div className={styles.infoSection}>
                  <h4>Key Features</h4>
                  <div className={styles.featureGrid}>
                    {selectedItem.type === 'flight' ? (
                      <>
                        <div className={styles.featureItem}>
                          <CheckCircle2 size={16} color={selectedItem.features?.children ? '#4ade80' : '#94a3b8'} />
                          <span>Child Friendly</span>
                        </div>
                        <div className={styles.featureItem}>
                          <CheckCircle2 size={16} color={selectedItem.features?.elderly ? '#4ade80' : '#94a3b8'} />
                          <span>Elderly Support</span>
                        </div>
                        <div className={styles.featureItem}>
                          <CheckCircle2 size={16} color={selectedItem.features?.specialNeeds ? '#4ade80' : '#94a3b8'} />
                          <span>Accessibility</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.featureItem}>
                          <Wifi size={16} color={selectedItem.features?.wifi ? '#4ade80' : '#94a3b8'} />
                          <span>Free WiFi</span>
                        </div>
                        <div className={styles.featureItem}>
                          <Coffee size={16} color={selectedItem.features?.breakfast ? '#4ade80' : '#94a3b8'} />
                          <span>Breakfast Included</span>
                        </div>
                        <div className={styles.featureItem}>
                          <Waves size={16} color={selectedItem.features?.pool ? '#4ade80' : '#94a3b8'} />
                          <span>Swimming Pool</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className={styles.infoSection}>
                  <h4>Pricing & Policy</h4>
                  <div className={styles.priceRow}>
                    <span>Total Cost:</span>
                    <span className={styles.priceValue}>{selectedItem.price || selectedItem.pricePerNight} AED</span>
                  </div>
                  <p className={styles.policyNote}>
                    {selectedItem.baggage ? `Baggage: ${selectedItem.baggage}` : "Standard refund policy applies (48h before stay)."}
                  </p>
                </div>
              </div>

              <div className={styles.aiInsights}>
                <div className={styles.aiLabel}><ShieldCheck size={16} /> AI Insight</div>
                <p>{selectedItem.description}</p>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
                Book Now (Simulated)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
