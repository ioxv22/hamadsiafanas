'use client';

import { useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Layout, 
  ArrowRight, 
  Brain, 
  Database, 
  ShieldCheck, 
  Users,
  Search,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Zap,
  Activity,
  Award,
  Globe
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function Stage4Page() {
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

      {/* --- CHAPTER 1: IDEATION & DESIGN (2.4.1 - 2.4.3) --- */}
      
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url("/stage4-bg.png")' }}></div>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="reveal">
            <div className="badge animate-pulse-glow">Stage 4: Possible Solutions</div>
            <h1>Ideation & <br /><span className="text-gradient">Design</span></h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              Generating and visualising two AI-powered travel assistant solutions
            </p>
            <div className={styles.teamBadge}>
              <Users size={18} />
              <span>Hamad • Saif • Anas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className={`${styles.introCard} glass-card`}>
              <div className="icon-box"><Brain /></div>
              <h2>Solution Ideation</h2>
              <p>
                As part of Stage 4, we are designing two distinct AI-based travel solutions. 
                Both approaches are built upon the requirements identified in Stage 3: accuracy, 
                speed, usability, and ethical safety. Our goal is to compare these systems 
                to determine the most effective solution for our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution 1: Chatbot */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="grid-2">
              <div className="glass-card">
                <div className={styles.solHeader}>
                  <div className="icon-box"><MessageSquare /></div>
                  <h3>Solution 1: AI Chatbot Flight Assistant</h3>
                </div>
                <p>Users type travel details and ask questions. The AI chatbot searches the simulated flight database and returns flights, prices, and baggage info in simple language.</p>
                
                <div className={styles.featureList}>
                  <div className={styles.fItem}><strong>AI Usage:</strong> NLP, Personalized responses, Smart recommendations</div>
                  <div className={styles.fItem}><strong>Problem Solved:</strong> Reduces confusion by explaining complex data naturally.</div>
                  <div className={styles.fItem}><strong>Data Used:</strong> Simulated flight schedules, Prices, Baggage policies.</div>
                </div>
              </div>
              
              <div className="glass-card">
                <h4>Flowchart: Chatbot Solution</h4>
                <div className={styles.flowchart}>
                  <div className={styles.flowStep}>User Input (Chat)</div>
                  <ArrowRight className={styles.flowArrow} />
                  <div className={styles.flowStep}>AI Processing</div>
                  <ArrowRight className={styles.flowArrow} />
                  <div className={styles.flowStep}>Database Search</div>
                  <ArrowRight className={styles.flowArrow} />
                  <div className={styles.flowStep}>AI Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution 2: Dashboard */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="grid-2">
              <div className="glass-card">
                <div className={styles.solHeader}>
                  <div className="icon-box"><Layout /></div>
                  <h3>Solution 2: Smart Flight Dashboard</h3>
                </div>
                <p>A visual system where users enter details to see flights in interactive tables and charts. Highlights the cheapest, fastest, and best-value options immediately.</p>
                
                <div className={styles.featureList}>
                  <div className={styles.fItem}><strong>AI Usage:</strong> Recommendation system, Smart ranking, Price optimization.</div>
                  <div className={styles.fItem}><strong>Problem Solved:</strong> Makes comparison easier using visual data instead of text chat.</div>
                  <div className={styles.fItem}><strong>Data Used:</strong> Airline prices, Flight duration, Airline ratings.</div>
                </div>
              </div>
              
              <div className="glass-card">
                <h4>Flowchart: Dashboard Solution</h4>
                <div className={styles.flowchart}>
                  <div className={styles.flowStep}>User Input Form</div>
                  <ArrowRight className={styles.flowArrow} />
                  <div className={styles.flowStep}>AI Ranking</div>
                  <ArrowRight className={styles.flowArrow} />
                  <div className={styles.flowStep}>Visual Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 2: EVALUATION & REQUIREMENTS (2.4.4 - 2.4.5) --- */}
      
      <section className={styles.chapterDivider}>
        <div className="container reveal">
          <div className={styles.dividerLine}></div>
          <h2 className="text-center">Stage 4: Evaluation & Requirements Check</h2>
          <p className="text-center" style={{ margin: '0 auto' }}>Testing two AI travel assistant approaches before final selection</p>
        </div>
      </section>

      {/* 5. Evaluation Table */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2>Performance Evaluation</h2>
            <div className={`${styles.tableWrapper} glass-card`}>
              <table className={styles.evalTable}>
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Solution 1 (Chatbot)</th>
                    <th>Solution 2 (Dashboard)</th>
                    <th>Evidence / Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Accuracy (%)</td>
                    <td className={styles.scoreGreen}>95%</td>
                    <td className={styles.scoreYellow}>88%</td>
                    <td>Data extraction test</td>
                  </tr>
                  <tr>
                    <td>Response Time (sec)</td>
                    <td className={styles.scoreRed}>3.5s</td>
                    <td className={styles.scoreGreen}>0.8s</td>
                    <td>Latency measurement</td>
                  </tr>
                  <tr>
                    <td>Reliability</td>
                    <td className={styles.scoreYellow}>High</td>
                    <td className={styles.scoreGreen}>Very High</td>
                    <td>System uptime test</td>
                  </tr>
                  <tr>
                    <td>User Impact</td>
                    <td className={styles.scoreGreen}>Excellent</td>
                    <td className={styles.scoreYellow}>Good</td>
                    <td>User feedback survey</td>
                  </tr>
                  <tr>
                    <td>Ethical Risk</td>
                    <td className={styles.scoreGreen}>Low</td>
                    <td className={styles.scoreGreen}>Low</td>
                    <td>Bias & Privacy audit</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.tableNote}>“Based on simulated testing and scenario evaluation”</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Analysis Insights */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="grid-3">
              {[
                { title: 'Accuracy Insight', text: 'Solution 1 (Chatbot) provides more accurate personalized answers by understanding specific user nuances.', icon: <CheckCircle2 /> },
                { title: 'Speed Insight', text: 'Solution 2 (Dashboard) is significantly faster as it renders all data at once without conversational delay.', icon: <Zap /> },
                { title: 'Reliability Insight', text: 'The dashboard approach offers higher reliability due to fewer dependencies on complex NLP processing.', icon: <Activity /> },
                { title: 'User Impact', text: 'Families and beginners prefer the Chatbot, while power users prefer the Dashboard’s data density.', icon: <Users /> },
                { title: 'Ethical Safety', text: 'Both solutions maintain high ethical standards by using only simulated data and protecting privacy.', icon: <ShieldCheck /> },
              ].map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <div className={styles.insightIcon}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Requirements Check (Checklist Table) */}
      <section>
        <div className="container">
          <div className="reveal">
            <h2>Requirements Alignment</h2>
            <div className={`${styles.tableWrapper} glass-card`}>
              <table className={styles.checklistTable}>
                <thead>
                  <tr>
                    <th>Requirements</th>
                    <th>Solution 1</th>
                    <th>Solution 2</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Easy-to-understand language',
                    'Clear flight price comparison',
                    'Shows baggage allowances clearly',
                    'Fast response time',
                    'Supports families & special needs',
                    'Uses simulated data only',
                    'Ethical AI guidelines compliance'
                  ].map((req, i) => (
                    <tr key={i}>
                      <td>{req}</td>
                      <td><CheckCircle2 className={styles.iconCheck} /></td>
                      <td>{i === 3 ? <XCircle className={styles.iconCross} /> : <CheckCircle2 className={styles.iconCheck} />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Decision Section */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className={styles.decisionCard}>
              <div className={styles.decisionGlow}></div>
              <div className="icon-box" style={{ margin: '0 auto 1.5rem' }}><Award /></div>
              <h2>Final Decision</h2>
              <div className={styles.decisionContent}>
                <p>
                  <strong>Solution 1 (Chatbot)</strong> is stronger in usability and accessibility, 
                  making it the ideal choice for our target audience of families and student travelers. 
                  While <strong>Solution 2</strong> offers superior speed, the conversational nature of 
                  Solution 1 provides a more supportive and ethical user experience.
                </p>
                <div className={styles.decisionBadge}>Recommended Path: Hybrid AI Chatbot</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Ethical Summary */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className={styles.ethicalCard}>
              <ShieldCheck className={styles.shieldIcon} />
              <div>
                <h3>Ethical Integrity</h3>
                <p>Both solutions are built on safe foundations. We use simulated data to ensure zero risk to real users, with no actual booking or payment systems involved. All AI recommendations are transparent and designed for educational purposes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Grade 11 AI Project • Stage 4 • Hamad • Saif • Anas</p>
      </footer>
    </main>
  );
}
