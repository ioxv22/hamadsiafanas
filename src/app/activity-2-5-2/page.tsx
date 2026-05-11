'use client';

import { useEffect, useRef } from 'react';
import { 
  Plane, 
  Database, 
  MessageSquare, 
  Brain, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Users,
  Search,
  Globe,
  Layout,
  MousePointer2,
  ListFilter,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function ActivityPage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
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
      
      {/* Background Particles */}
      <div className={styles.particles}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${12 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url("/solution-bg.png")' }}></div>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="reveal">
            <div className="badge animate-pulse-glow">Activity 2.5.2</div>
            <h1>Finalise the <br /><span className="text-gradient">Solution Design</span></h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              AI-Powered Airline Booking Assistant Prototype
            </p>
            <div className={styles.teamBadge}>
              <Users size={18} />
              <span>Grade 11 AI Project — Hamad • Saif • Anas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Final Solution Overview */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className={`${styles.overviewCard} glass-card`}>
              <div className={styles.overviewHeader}>
                <div className="icon-box"><Globe /></div>
                <h2>Final Solution Overview</h2>
              </div>
              <div className={styles.overviewGrid}>
                <div className={styles.overviewList}>
                  <ul>
                    <li><CheckCircle2 size={18} /> <span>Users enter travel details like destination, dates, and passengers.</span></li>
                    <li><CheckCircle2 size={18} /> <span>The AI searches simulated flight data in real-time.</span></li>
                    <li><CheckCircle2 size={18} /> <span>Displays flights with prices, baggage rules, and duration.</span></li>
                    <li><CheckCircle2 size={18} /> <span>AI assistant explains complex information in simple language.</span></li>
                    <li><CheckCircle2 size={18} /> <span>Recommends the best flight based on user-specific needs.</span></li>
                    <li><CheckCircle2 size={18} /> <span>Users review total cost before final selection.</span></li>
                    <li><CheckCircle2 size={18} /> <span>No real booking or payment is made — purely educational.</span></li>
                  </ul>
                </div>
                <div className={styles.overviewVisual}>
                  <div className={styles.visualCircle}>
                    <Plane size={60} className="animate-float" />
                    <div className={styles.visualPulse}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main System Components */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2 className="text-center">Main System Components</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div className="glass-card">
                <div className="icon-box"><MousePointer2 /></div>
                <h3>User Interface</h3>
                <p>Clean, futuristic dashboard designed for easy navigation and student-friendly interaction.</p>
              </div>
              <div className="glass-card">
                <div className="icon-box"><Database /></div>
                <h3>Simulated Flight Database</h3>
                <p>A comprehensive mock database containing routes, prices, and airline policies for testing.</p>
              </div>
              <div className="glass-card">
                <div className="icon-box"><MessageSquare /></div>
                <h3>AI Chatbot</h3>
                <p>Natural language engine that interprets user requests and provides intelligent feedback.</p>
              </div>
              <div className="glass-card">
                <div className="icon-box"><Brain /></div>
                <h3>Recommendation System</h3>
                <p>Heuristic algorithms that sort results based on cost-efficiency and user comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How AI Is Used */}
      <section className={styles.workflowSection}>
        <div className="container">
          <div className="reveal">
            <h2>How AI Is Used</h2>
            <div className={styles.workflowWrapper}>
              <div className={styles.workflowPath}>
                {[
                  { step: 'User Input', text: 'Destination & Dates' },
                  { step: 'AI Analysis', text: 'Processing Intent' },
                  { step: 'Flight Comparison', text: 'Pattern Matching' },
                  { step: 'Smart Recommendation', text: 'Optimal Result' }
                ].map((item, idx) => (
                  <div key={idx} className={styles.workflowNode}>
                    <div className={styles.nodeCircle}>{idx + 1}</div>
                    <h4>{item.step}</h4>
                    <p>{item.text}</p>
                    {idx < 3 && <div className={styles.pathLine}></div>}
                  </div>
                ))}
              </div>
              
              <div className="grid-2" style={{ marginTop: '4rem' }}>
                <div className={styles.aiPoint}>
                  <Sparkles size={24} />
                  <div>
                    <strong>Natural Language Processing</strong>
                    <p>Understanding conversational requests from users instantly.</p>
                  </div>
                </div>
                <div className={styles.aiPoint}>
                  <ListFilter size={24} />
                  <div>
                    <strong>Simplifying Policies</strong>
                    <p>Turning complex baggage and refund rules into simple text.</p>
                  </div>
                </div>
                <div className={styles.aiPoint}>
                  <Search size={24} />
                  <div>
                    <strong>Comparing Flight Details</strong>
                    <p>Scanning thousands of data points to find the best value.</p>
                  </div>
                </div>
                <div className={styles.aiPoint}>
                  <CheckCircle2 size={24} />
                  <div>
                    <strong>Personalized Recommendations</strong>
                    <p>Tailoring suggestions to the user's specific travel habits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Combined Features Section */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2 className="text-center">Feature Inspiration</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div className={styles.inspirationCard}>
                <div className={styles.inspSource}>Skyscanner</div>
                <p>Inspiration for multi-airline price comparison and sorting.</p>
              </div>
              <div className={styles.inspirationCard}>
                <div className={styles.inspSource}>Booking.com</div>
                <p>Inspiration for clean, minimalist booking flow design.</p>
              </div>
              <div className={styles.inspirationCard}>
                <div className={styles.inspSource}>Expedia</div>
                <p>Inspiration for real-time chatbot support and assistance.</p>
              </div>
              <div className={styles.inspirationCard}>
                <div className={styles.inspSource}>Google Flights</div>
                <p>Inspiration for data visualization and smart insights.</p>
              </div>
            </div>
            <div className={styles.combinedBanner}>
              <Sparkles className={styles.bannerIcon} />
              <p>“Our final solution combines the best features into one intelligent travel assistant.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ethics & Safety */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2>Ethics & Safety</h2>
            <div className="grid-3">
              {[
                { title: 'Simulated Data', text: 'No real flights or personal data used.' },
                { title: 'No Transactions', text: 'Educational prototype with zero payments.' },
                { title: 'Safe AI', text: 'Compliant with ethical AI development standards.' },
                { title: 'Transparent', text: 'All recommendations are explained clearly.' },
                { title: 'Educational', text: 'Designed specifically for Grade 11 learning.' },
                { title: 'Secure', text: 'Built to demonstrate AI safety principles.' }
              ].map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--primary)', marginBottom: '0.75rem' }} />
                  <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Summary */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className={styles.summaryCard}>
              <div className={styles.summaryGlow}></div>
              <p>
                “Smart Travel AI Assistant simplifies travel planning by using AI to provide 
                intelligent recommendations, simple explanations, and user-friendly booking 
                guidance in a safe educational environment.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Grade 11 AI Project • Activity 2.5.2 • Hamad • Saif • Anas</p>
      </footer>
    </main>
  );
}
