'use client';

import { useEffect } from 'react';
import { 
  ClipboardList, 
  Search, 
  ArrowRightLeft, 
  MessageSquare, 
  Accessibility, 
  Cpu, 
  DollarSign, 
  Layers, 
  Leaf, 
  ShieldAlert, 
  AlertCircle,
  Users,
  CheckCircle2,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function Stage3Page() {
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

      {/* --- CHAPTER 1: DESIGN REQUIREMENTS (2.3.1) --- */}
      
      <section className={styles.heroSection}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url("/stage3-bg.png")' }}></div>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="reveal">
            <div className="badge animate-pulse-glow">Stage 3: Requirements</div>
            <h1>Design <br /><span className="text-gradient">Requirements</span></h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              The Ai Pilots — System Requirements for Smart Travel AI Assistant
            </p>
            <div className={styles.teamBadge}>
              <Users size={18} />
              <span>Hamad • Saif • Anas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Introduction - Design */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className={`${styles.introCard} glass-card`}>
              <div className="icon-box"><ClipboardList /></div>
              <h2>System Scope</h2>
              <p>
                This project defines what the system must do and its constraints. Requirements are 
                grouped into functional, technical, cost, safety, and environmental categories 
                to guide the design of the AI travel assistant effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Required Functions & Features */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2>Required Functions & Features</h2>
            <div className="grid-2">
              {[
                { icon: <Search />, text: 'Search and display flights based on destination, dates, and passengers.' },
                { icon: <ArrowRightLeft />, text: 'Compare flight prices from different airlines clearly and accurately.' },
                { icon: <AlertCircle />, text: 'Explain baggage policies, travel conditions, and extra fees in simple language.' },
                { icon: <Accessibility />, text: 'Provide personalized recommendations for families, elderly, and special needs.' },
                { icon: <MessageSquare />, text: 'Answer user questions instantly using a conversational AI chatbot interface.' }
              ].map((item, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <div className={styles.fIcon}>{item.icon}</div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical & Cost Limits */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="grid-2">
              <div className="glass-card">
                <div className="icon-box"><Cpu /></div>
                <h3>Technical Limits</h3>
                <ul className={styles.cardList}>
                  <li>Digital web-based prototype</li>
                  <li>No physical hardware requirements</li>
                  <li>Smooth execution on school browsers</li>
                  <li>Lightweight design for performance</li>
                </ul>
              </div>
              <div className="glass-card">
                <div className="icon-box"><DollarSign /></div>
                <h3>Cost & Budget</h3>
                <ul className={styles.cardList}>
                  <li>Free or low-cost development tools</li>
                  <li>No paid APIs for final prototype</li>
                  <li>Zero financial transaction risks</li>
                  <li>Educational prototype allocation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tools & Environment */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="grid-2">
              <div className="glass-card">
                <div className="icon-box"><Layers /></div>
                <h3>Required Tools</h3>
                <div className={styles.toolGrid}>
                  <div className={styles.tool}>Laptop / PC</div>
                  <div className={styles.tool}>AI LLM Tool</div>
                  <div className={styles.tool}>Web Dev Stack</div>
                  <div className={styles.tool}>Mock Database</div>
                </div>
              </div>
              <div className="glass-card" style={{ borderColor: '#4ade80' }}>
                <div className="icon-box" style={{ color: '#4ade80' }}><Leaf /></div>
                <h3>Environment</h3>
                <p>Digital system reduces paper waste. We aim to minimize computation cycles to save energy and promote sustainable travel awareness through eco-friendly suggestions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Safety & Constraints */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="grid-2">
              <div className="glass-card" style={{ borderLeft: '4px solid #f87171' }}>
                <div className="icon-box" style={{ color: '#f87171' }}><ShieldAlert /></div>
                <h3>Safety Requirements</h3>
                <ul className={styles.cardList}>
                  <li>Zero real personal or payment data</li>
                  <li>Strictly simulated data disclaimer</li>
                  <li>No unauthorized data collection</li>
                  <li>UAE MOE Ethical AI compliance</li>
                </ul>
              </div>
              <div className="glass-card">
                <div className="icon-box"><ClipboardList /></div>
                <h3>Project Constraints</h3>
                <ul className={styles.cardList}>
                  <li>Simulated data statement mandatory</li>
                  <li>Acknowledge AI bias and limits</li>
                  <li>Simple UI for absolute beginners</li>
                  <li>Validated through peer feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 2: USER REQUIREMENTS (2.3.2) --- */}
      
      <section className={styles.chapterDivider}>
        <div className="container reveal">
          <div className={styles.dividerLine}></div>
          <h2 className="text-center">Stage 3: User Requirements Definition</h2>
          <p className="text-center" style={{ margin: '0 auto' }}>Identifying user groups and their mandatory/optional needs</p>
        </div>
      </section>

      {/* 6. User Requirements Table */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2>User-Centered Needs</h2>
            <div className={`${styles.tableWrapper} glass-card`}>
              <table className={styles.userTable}>
                <thead>
                  <tr>
                    <th>Target Users</th>
                    <th>Specific Needs</th>
                    <th>Priority Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.userCol}>
                      <strong>Families</strong>
                      <p>Travelling together</p>
                    </td>
                    <td>
                      <ul className={styles.needsList}>
                        <li>Compare multi-passenger prices</li>
                        <li>Clear baggage allowance info</li>
                        <li>Child-friendly options & seating</li>
                      </ul>
                    </td>
                    <td><span className={styles.statusMandatory}>Mandatory</span></td>
                  </tr>
                  <tr>
                    <td className={styles.userCol}>
                      <strong>Elderly travellers</strong>
                      <p>Seniors requiring support</p>
                    </td>
                    <td>
                      <ul className={styles.needsList}>
                        <li>Large text / High contrast UI</li>
                        <li>Step-by-step guidance</li>
                        <li>Wheelchair assistance support</li>
                      </ul>
                    </td>
                    <td><span className={styles.statusMandatory}>Mandatory</span></td>
                  </tr>
                  <tr>
                    <td className={styles.userCol}>
                      <strong>People with Disabilities</strong>
                      <p>Special needs support</p>
                    </td>
                    <td>
                      <ul className={styles.needsList}>
                        <li>Full accessibility support</li>
                        <li>Medical equipment info</li>
                        <li>Priority boarding guidance</li>
                      </ul>
                    </td>
                    <td><span className={styles.statusMandatory}>Mandatory</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Requirements Insight Cards */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="grid-3">
              <div className={styles.insightCard}>
                <div className={styles.insightIcon}><Zap /></div>
                <h4>Ease of Use</h4>
                <p>System must be simple and clear for all users regardless of tech skill.</p>
              </div>
              <div className={styles.insightCard}>
                <div className={styles.insightIcon}><Accessibility /></div>
                <h4>Accessibility</h4>
                <p>Full support for elderly users and travellers with special needs.</p>
              </div>
              <div className={styles.insightCard}>
                <div className={styles.insightIcon}><ShieldCheck /></div>
                <h4>Safety & Clarity</h4>
                <p>Ensures zero confusion in pricing, rules, or system limitations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why It Matters & Flow */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="grid-2">
              <div className="glass-card">
                <h3>Why Requirements Matter</h3>
                <p>Travel planning is complex. Different users need different levels of support. AI must adapt to accessibility needs to reduce confusion and improve decision-making in a safe environment.</p>
              </div>
              <div className={styles.flowCard}>
                <div className={styles.flowItem}>User Needs <ChevronRight /></div>
                <div className={styles.flowItem}>AI Design <ChevronRight /></div>
                <div className={styles.flowItem}>Personalization <ChevronRight /></div>
                <div className={styles.flowItem} style={{ border: 'none' }}>Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Grade 11 AI Project • Stage 3 • Hamad • Saif • Anas</p>
      </footer>
    </main>
  );
}
