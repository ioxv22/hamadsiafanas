'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import styles from './page.module.css';

const slides = [
  {
    id: 1,
    content: (
      <>
        <div className="badge animate-pulse-glow" style={{ marginBottom: '2rem' }}>Grade 11 AI Project</div>
        <h1 className={styles.slideTitle}>Smart Travel AI Assistant</h1>
        <h2 className={styles.slideSubtitle}>Flights & Hotels Recommendation System</h2>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '3rem' }}>AI-Powered Travel Platform</p>
        
        <div style={{ marginTop: 'auto' }}>
          <p style={{ color: 'var(--text-muted)' }}>Presented by:</p>
          <div className={styles.teamMembers}>
            <div className={styles.teamMember}>Hamad</div>
            <div className={styles.teamMember}>Saif</div>
            <div className={styles.teamMember}>Anas</div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 2,
    content: (
      <div className={styles.flexLayout}>
        <div>
          <h2 className={styles.slideTitle} style={{ fontSize: '2.5rem' }}>Project Overview</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
            Smart Travel AI Assistant is an AI-powered travel platform designed to help users plan trips, organize budgets, discover destinations, and manage travel information in one place.
          </p>
        </div>
        <div className="glass-card" style={{ background: 'rgba(0,112,243,0.1)' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Primary Goals</h3>
          <ul className={styles.bulletList}>
            <li>Smarter travel planning</li>
            <li>Budget tracking</li>
            <li>Trip organization</li>
            <li>AI assistance</li>
            <li>Travel safety</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className={styles.flexLayout}>
        <div>
          <h2 className={styles.slideTitle} style={{ fontSize: '2.5rem' }}>The Problem</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '2rem' }}>Travel planning is difficult because users rely on multiple scattered applications:</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <span className="badge">Flights apps</span>
            <span className="badge">Hotels apps</span>
            <span className="badge">Budget tools</span>
            <span className="badge">Maps</span>
            <span className="badge">Documents</span>
          </div>
          <p style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>Users face information overload, time loss, and a scattered planning process.</p>
        </div>
        <div className="glass-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Our Solution</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            The project solves this by combining everything into ONE unified AI system.
            <br /><br />
            <span style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>"Travel AI systems increasingly combine planning, booking and conversational assistants."</span>
          </p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div style={{ width: '100%' }}>
        <h2 className={styles.slideTitle} style={{ fontSize: '2.5rem', textAlign: 'center' }}>Website Features</h2>
        <div className={styles.gridList} style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {['AI Travel Assistant', 'Budget Planning', 'Travel Stories', 'Trip Events', 'Journal System', 'Travel Albums', 'Safety Information', 'Currency Support', 'Ticket Storage', 'Document Management', 'Country Information', 'Smart Planning'].map((f, i) => (
            <div key={i} className="glass-card" style={{ padding: '1rem', textAlign: 'center', fontSize: '1.1rem' }}>
              {f}
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>The website includes connected travel tools such as budgeting, documents and trip organization.</p>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className={styles.flexLayout}>
        <div>
          <h2 className={styles.slideTitle} style={{ fontSize: '2.5rem' }}>AI Features</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '2rem' }}>How AI improves the user experience:</p>
          <ul className={styles.bulletList}>
            <li>Destination recommendations</li>
            <li>Travel planning assistance</li>
            <li>Budget analysis</li>
            <li>Travel suggestions</li>
            <li>Country information</li>
            <li>Smart organization</li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="animate-pulse-glow" style={{ fontSize: '8rem' }}>🧠</div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2 className={styles.slideTitle} style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>User Flow</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {['User enters trip', 'AI helps planning', 'Budget generated', 'Store tickets', 'Save memories', 'Track journey'].map((step, i, arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--primary)', color: 'white', fontWeight: 'bold' }}>
                {step}
              </div>
              {i < arr.length - 1 && <div style={{ fontSize: '2rem', margin: '0 1rem', color: 'var(--accent)' }}>→</div>}
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div style={{ width: '100%' }}>
        <h2 className={styles.slideTitle} style={{ fontSize: '2.5rem', textAlign: 'center' }}>System Modules</h2>
        <div className={styles.gridList} style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
          {[
            { icon: '✈', name: 'Smart Planning' }, { icon: '💰', name: 'Budget System' },
            { icon: '🗺', name: 'Travel Events' }, { icon: '📖', name: 'Journal Feature' },
            { icon: '🛡', name: 'Safety Center' }, { icon: '💱', name: 'Currency Module' },
            { icon: '🎫', name: 'Ticket Manager' }, { icon: '📁', name: 'Documents Storage' },
            { icon: '🌍', name: 'Country Insights' }, { icon: '📷', name: 'Albums' }
          ].map((m, i) => (
            <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
              <span style={{ fontSize: '2rem' }}>{m.icon}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'center' }}>{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div style={{ width: '100%' }}>
        <h2 className={styles.slideTitle} style={{ fontSize: '2.5rem', textAlign: 'center' }}>Technology Stack</h2>
        <div className={styles.gridList} style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '4rem' }}>
          <div className={styles.gridItem}>
            <h4>Frontend</h4>
            <p>Next.js & TailwindCSS</p>
          </div>
          <div className={styles.gridItem}>
            <h4>Artificial Intelligence</h4>
            <p>OpenAI APIs</p>
          </div>
          <div className={styles.gridItem}>
            <h4>Backend</h4>
            <p>Node.js</p>
          </div>
          <div className={styles.gridItem} style={{ gridColumn: '1 / span 1.5' }}>
            <h4>Database</h4>
            <p>MongoDB</p>
          </div>
          <div className={styles.gridItem} style={{ gridColumn: 'auto / span 1.5' }}>
            <h4>Deployment</h4>
            <p>Vercel</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2 className={styles.slideTitle} style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>The Team</h2>
        <div className={styles.gridList} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="glass-card" style={{ borderTop: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hamad</h3>
            <p style={{ color: 'var(--text-muted)' }}>AI Development<br/>System Design</p>
          </div>
          <div className="glass-card" style={{ borderTop: '4px solid var(--secondary)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Saif</h3>
            <p style={{ color: 'var(--text-muted)' }}>Research<br/>Data Collection</p>
          </div>
          <div className="glass-card" style={{ borderTop: '4px solid var(--accent)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Anas</h3>
            <p style={{ color: 'var(--text-muted)' }}>Presentation<br/>UI Design</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div style={{ textAlign: 'center' }}>
        <div className="badge animate-pulse-glow" style={{ marginBottom: '2rem' }}>Conclusion</div>
        <h2 className={styles.slideTitle} style={{ fontSize: '3rem', marginBottom: '2rem' }}>Thank You</h2>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-main)', maxWidth: '800px', lineHeight: '1.6', margin: '0 auto 4rem auto' }}>
          Smart Travel AI Assistant combines travel planning, AI support, budgeting and organization into one intelligent platform.
        </p>
        <p style={{ color: 'var(--text-muted)' }}>Presented by:</p>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginTop: '1rem' }}>Hamad • Saif • Anas</h3>
      </div>
    )
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className={styles.presentationContainer}>
      <a href="/" style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 100, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
        <Home size={20} /> Back to Website
      </a>

      {currentSlide > 0 && (
        <button className={`${styles.navButton} ${styles.navLeft}`} onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
      )}

      {currentSlide < slides.length - 1 && (
        <button className={`${styles.navButton} ${styles.navRight}`} onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>
      )}

      <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === 0 ? styles.slideCover : styles.slideContent}`}
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transform: `scale(${currentSlide === index ? 1 : 0.95}) translateX(${(index - currentSlide) * 50}px)`,
              pointerEvents: currentSlide === index ? 'auto' : 'none',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: currentSlide === index ? 10 : 0
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
