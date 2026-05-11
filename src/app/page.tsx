'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Plane, 
  Hotel, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  Layout, 
  Clock, 
  DollarSign, 
  MapPin,
  ArrowRight,
  BrainCircuit,
  Settings,
  Activity,
  Award,
  Search
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ChatAssistant from '@/components/ChatAssistant';
import ResultsView from '@/components/ResultsView';
import styles from './page.module.css';

export default function Home() {
  const [results, setResults] = useState({ flights: [], hotels: [], packages: [] });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />
      {/* Background Effects */}
      <div className={styles.particles}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="glow-spot" style={{ top: '10%', left: '10%' }}></div>
      <div className="glow-spot" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)' }}></div>
      
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url("/hero-bg.png")' }}></div>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="reveal">
            <div className="badge animate-pulse-glow">Grade 11 AI Project</div>
            <h1>Smart Travel <br /><span className="text-gradient">AI Assistant</span></h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>
              AI-Powered Flights & Hotels Recommendation System
            </p>
            <div className={styles.teamBadge}>
              <Users size={18} />
              <span>Hamad • Saif • Anas</span>
            </div>
            <div className={styles.heroBtns}>
              <a href="#features" className="btn btn-primary">
                Explore Features <ArrowRight size={20} />
              </a>
              <a href="#demo" className="btn btn-outline">
                Try Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Overview */}
      <section id="overview">
        <div className="container">
          <div className="reveal">
            <h2>Project Overview</h2>
            <div className="grid-3">
              <div className="glass-card">
                <div className="icon-box"><Plane /></div>
                <h3>Intelligent Flights</h3>
                <p>Real-time comparison and intelligent sorting based on your specific needs.</p>
              </div>
              <div className="glass-card">
                <div className="icon-box"><Hotel /></div>
                <h3>Smart Hotels</h3>
                <p>Personalized hotel recommendations powered by deep learning preferences.</p>
              </div>
              <div className="glass-card">
                <div className="icon-box"><BrainCircuit /></div>
                <h3>AI Logic</h3>
                <p>Sophisticated algorithms that find the perfect balance between cost and comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className={styles.problemSection} id="problem">
        <div className="container">
          <div className="reveal">
            <h2 className="text-center">The Challenge</h2>
            <div className="grid-3">
              <div className={`${styles.problemCard} glass-card`}>
                <div className={styles.problemIcon}>1</div>
                <h3>Information Overload</h3>
                <p>Thousands of options make it impossible to choose manually without stress.</p>
              </div>
              <div className={`${styles.problemCard} glass-card`}>
                <div className={styles.problemIcon}>2</div>
                <h3>Complex Decisions</h3>
                <p>Comparing layovers, baggage rules, and ratings across platforms is exhausting.</p>
              </div>
              <div className={`${styles.problemCard} glass-card`}>
                <div className={styles.problemIcon}>3</div>
                <h3>Lack of Guidance</h3>
                <p>Most platforms just sell seats without understanding the student context.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI Solution Workflow */}
      <section className={styles.workflowSection}>
        <div className="container">
          <div className="reveal">
            <h2>How It Works</h2>
            <div className={styles.workflowContainer}>
              <div className={styles.workflowStep}>
                <div className="glass-card">
                  <div className="icon-box"><Settings /></div>
                  <h4>User Input</h4>
                  <p>Destination & Budget</p>
                </div>
              </div>
              <div className={styles.workflowConnector}><ArrowRight size={32} /></div>
              <div className={styles.workflowStep}>
                <div className="glass-card" style={{ borderColor: 'var(--primary)' }}>
                  <div className="icon-box" style={{ color: 'var(--accent)' }}><BrainCircuit /></div>
                  <h4>AI Processing</h4>
                  <p>Neural Ranking</p>
                </div>
              </div>
              <div className={styles.workflowConnector}><ArrowRight size={32} /></div>
              <div className={styles.workflowStep}>
                <div className="glass-card">
                  <div className="icon-box"><Award /></div>
                  <h4>Smart Results</h4>
                  <p>Optimized Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Features */}
      <section id="features">
        <div className="container">
          <div className="reveal">
            <h2>Key Features</h2>
            <div className="grid-3">
              {[
                { icon: <Sparkles />, title: 'AI Chat Assistant', text: 'Natural language trip planning.' },
                { icon: <Activity />, title: 'Flight Comparison', text: 'Visual data for quick decisions.' },
                { icon: <MapPin />, title: 'Hotel Recommendations', text: 'Proximity and rating analysis.' },
                { icon: <Zap />, title: 'Package Deals', text: 'Bundled savings automatically found.' },
                { icon: <DollarSign />, title: 'Student Budget', text: 'Optimized for limited spending.' },
                { icon: <Clock />, title: 'Instant Booking', text: 'Simulated real-time execution.' },
              ].map((f, i) => (
                <div key={i} className="glass-card">
                  <div className="icon-box">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Live AI Demo */}
      <section id="demo">
        <div className="container">
          <div className="reveal">
            <h2>Experience the AI Demo</h2>
            <p style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
              Chat with our smart assistant to get real-time recommendations.
            </p>
            <div className={styles.demoLayout}>
              <div className={styles.chatSide}>
                <ChatAssistant onSearch={setResults} />
              </div>
              <div className={styles.resultsSide}>
                <ResultsView results={results} />
                {results.flights.length === 0 && results.hotels.length === 0 && (
                  <div className={styles.demoPlaceholder}>
                    <Search size={48} />
                    <p>Search for "Flights to London" or "Hotels in Dubai" in the chat to see results here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hotels Recommendation Section */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2>Recommended Stays</h2>
            <div className="grid-2">
              <div className={styles.hotelCard}>
                <div className={styles.hotelImg} style={{ backgroundImage: 'url("/hotel-1.png")' }}>
                  <div className={styles.hotelRating}>4.8 ★</div>
                </div>
                <div className={styles.hotelContent}>
                  <h3>Neo Tokyo Luxury</h3>
                  <p><MapPin size={14} /> 200m from City Center</p>
                  <div className={styles.amenities}>
                    <span>WiFi</span> <span>AI Butler</span> <span>Pool</span>
                  </div>
                  <div className={styles.hotelFooter}>
                    <span className={styles.price}>$240 / night</span>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>View Details</button>
                  </div>
                </div>
              </div>
              <div className={styles.hotelCard}>
                <div className={styles.hotelImg} style={{ backgroundImage: 'url("/hotel-2.png")' }}>
                  <div className={styles.hotelRating}>4.5 ★</div>
                </div>
                <div className={styles.hotelContent}>
                  <h3>Eco Resort 2050</h3>
                  <p><MapPin size={14} /> 1.2km from City Center</p>
                  <div className={styles.amenities}>
                    <span>Solar Power</span> <span>Spa</span> <span>Organic</span>
                  </div>
                  <div className={styles.hotelFooter}>
                    <span className={styles.price}>$180 / night</span>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Ethics & Safety */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2>Ethics & Safety</h2>
            <div className="grid-2">
              <div className="glass-card">
                <div className="icon-box"><ShieldCheck /></div>
                <h3>Simulated Data Only</h3>
                <p>This project uses synthetic data to demonstrate AI capabilities without compromising real user privacy.</p>
              </div>
              <div className="glass-card">
                <div className="icon-box"><TrendingUp /></div>
                <h3>UAE MOE Compliance</h3>
                <p>Developed in strict adherence to the UAE Ministry of Education's AI Ethics guidelines for student projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Takeaways */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className={styles.takeawayHero}>
              <h2>The Future of Travel</h2>
              <div className="grid-3" style={{ marginTop: '3rem' }}>
                <div className={styles.takeawayCard}>
                  <h4>Empowerment</h4>
                  <p>AI gives users the tools to navigate complex global markets easily.</p>
                </div>
                <div className={styles.takeawayCard}>
                  <h4>Simplicity</h4>
                  <p>Turning hours of research into seconds of intelligent results.</p>
                </div>
                <div className={styles.takeawayCard}>
                  <h4>Ethics</h4>
                  <p>Built with transparency and user safety as core foundations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div>
              <h3>Smart Travel AI</h3>
              <p>Grade 11 AI Project • 2026</p>
            </div>
            <div className={styles.footerTeam}>
              <strong>Project Team:</strong>
              <p>Hamad • Saif • Anas</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 All Rights Reserved. Educational Demo.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
