'use client';

import { useEffect, useState } from 'react';
import ChatAssistant from '@/components/ChatAssistant';
import ResultsView from '@/components/ResultsView';
import { 
  Plane, 
  Hotel,
  DollarSign,
  Activity,
  BrainCircuit,
  Globe,
  Calendar,
  Star,
  GraduationCap,
  CheckCircle,
  Cpu,
  PlaneTakeoff,
  Building,
  Wallet,
  ArrowRight,
  Code,
  Search,
  Database,
  PenTool,
  Layout,
  CheckSquare,
  Presentation
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function Home() {
  const [results, setResults] = useState({ flights: [], hotels: [], packages: [] });

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
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="glow-spot" style={{ top: '5%', left: '5%' }}></div>
      <div className="glow-spot" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)' }}></div>

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="reveal">
            <div className="badge animate-pulse-glow">Grade 11 AI Project</div>
            <h1>Smart Travel <br /><span className="text-gradient">AI Assistant</span></h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '800px', lineHeight: '1.6' }}>
              AI-powered system for flight and hotel recommendations for students and families.
            </p>
            <div className={styles.teamBadge}>
              <span>Team: Hamad • Saif • Anas</span>
            </div>
            <div className={styles.heroBtns}>
              <a href="#activities" className="btn btn-primary">
                Explore Project <ArrowRight size={20} />
              </a>
              <a href="#activities" className="btn btn-outline">
                View Activities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Activities Section */}
      <section id="activities">
        <div className="container">
          <div className="reveal">
            <h2>Activities / Modules</h2>
            <div className="grid-3">
              <a href="/flights" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="glass-card" style={{ animationDelay: `0s`, cursor: 'pointer' }}>
                  <div className="icon-box"><PlaneTakeoff /></div>
                  <h3>Global Flight System</h3>
                  <p>Search, compare, and book realistic flights.</p>
                </div>
              </a>
              {[
                { icon: <Building />, title: 'Hotel Recommendation Engine', desc: 'Suggest hotels based on price, rating and location.', link: 'hotel-recommendation', delay: 0.1 },
                { icon: <Wallet />, title: 'Travel Budget Planner', desc: 'Estimate full trip expenses.', link: 'budget-planner', delay: 0.2 },
                { icon: <Activity />, title: 'Flight Comparison System', desc: 'Compare airline prices and options.', link: 'flight-comparison', delay: 0.3 },
                { icon: <BrainCircuit />, title: 'AI Recommendation Model', desc: 'Generate personalized travel suggestions.', link: 'ai-recommendation', delay: 0.4 },
                { icon: <Globe />, title: 'Destination Selection', desc: 'Recommend destinations based on preferences.', link: 'destination-selection', delay: 0.5 },
                { icon: <Calendar />, title: 'Travel Schedule Planner', desc: 'Create trip timeline automatically.', link: 'schedule-planner', delay: 0.6 },
                { icon: <Star />, title: 'Hotel Rating Analyzer', desc: 'Analyze hotel reviews and ratings.', link: 'rating-analyzer', delay: 0.7 },
                { icon: <GraduationCap />, title: 'Student Travel Mode', desc: 'Special recommendations for students.', link: 'student-travel-mode', delay: 0.8 },
              ].map((activity, i) => (
                <a key={i} href={`/modules/${activity.link}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="glass-card" style={{ animationDelay: `${activity.delay}s`, cursor: 'pointer' }}>
                    <div className="icon-box">{activity.icon}</div>
                    <h3>{activity.title}</h3>
                    <p>{activity.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Process Timeline */}
      <section id="timeline" className={styles.timelineSection}>
        <div className="container">
          <div className="reveal">
            <h2>Project Process Timeline</h2>
            <div className={styles.timeline}>
              {[
                { title: 'Problem Identification', icon: <Search />, link: 'problem-identification' },
                { title: 'Research', icon: <Globe />, link: 'research' },
                { title: 'Dataset Collection', icon: <Database />, link: 'dataset-collection' },
                { title: 'AI Design', icon: <BrainCircuit />, link: 'ai-design' },
                { title: 'Model Planning', icon: <Code />, link: 'model-planning' },
                { title: 'UI Design', icon: <Layout />, link: 'ui-design' },
                { title: 'Testing', icon: <CheckSquare />, link: 'testing' },
                { title: 'Final Presentation', icon: <Presentation />, link: 'final-presentation' },
              ].map((step, i) => (
                <a key={i} href={`/process/${step.link}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.timelineItem} style={{ cursor: 'pointer' }}>
                    <div className={styles.timelineIcon}>{step.icon}</div>
                    <div className={styles.timelineContent}>
                      <h3>{step.title}</h3>
                      <div className={styles.timelineDot}></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section id="team">
        <div className="container">
          <div className="reveal">
            <h2>Meet The Team</h2>
            <div className="grid-3">
              <div className={`${styles.teamCard} glass-card`}>
                <div className={styles.teamAvatar} style={{ backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--bg-navy) 100%)' }}>H</div>
                <h3>Hamad</h3>
                <p className={styles.role}>AI Development</p>
              </div>
              <div className={`${styles.teamCard} glass-card`}>
                <div className={styles.teamAvatar} style={{ backgroundImage: 'linear-gradient(135deg, var(--secondary) 0%, var(--bg-navy) 100%)' }}>S</div>
                <h3>Saif</h3>
                <p className={styles.role}>Research & Data</p>
              </div>
              <div className={`${styles.teamCard} glass-card`}>
                <div className={styles.teamAvatar} style={{ backgroundImage: 'linear-gradient(135deg, var(--accent) 0%, var(--bg-navy) 100%)' }}>A</div>
                <h3>Anas</h3>
                <p className={styles.role}>Presentation & Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. Live AI Assistant */}
      <section id="demo">
        <div className="container">
          <div className="reveal">
            <h2>Live AI Travel Assistant</h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>
              Ask our DeepSeek AI to plan your perfect trip. (Try: "Trip to Japan under $1200")
            </p>
            <div style={{ display: 'flex', gap: '2rem', minHeight: '500px', flexDirection: 'row', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <ChatAssistant onSearch={setResults} />
              </div>
              <div style={{ flex: '1.5', minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
                <ResultsView results={results} />
                {(!results.flights || results.flights.length === 0) && (!results.hotels || results.hotels.length === 0) && (!results.packages || results.packages.length === 0) && (
                  <div className="glass-card" style={{ height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', textAlign: 'center' }}>
                    <p>Start chatting with the AI to see interactive flight and hotel results here!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Statistics Section */}
      <section id="statistics" className={styles.statsSection}>
        <div className="container">
          <div className="reveal">
            <h2>Project Statistics</h2>
            <div className={styles.statsGrid}>
              {[
                { icon: <CheckCircle size={32}/>, count: '9', label: 'Activities Completed' },
                { icon: <Cpu size={32}/>, count: '5+', label: 'AI Modules' },
                { icon: <PlaneTakeoff size={32}/>, count: '10k+', label: 'Flight Analyses' },
                { icon: <Building size={32}/>, count: '5k+', label: 'Hotel Recommendations' },
                { icon: <Wallet size={32}/>, count: '100+', label: 'Budget Plans' },
              ].map((stat, i) => (
                <div key={i} className={styles.statBox}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statCount}>{stat.count}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div>
              <h3>Smart Travel AI Assistant</h3>
              <p>Flights & Hotels Recommendation System</p>
              <p>Grade 11 AI Project</p>
            </div>
            <div className={styles.footerTeam}>
              <strong>Made by:</strong>
              <p>Hamad • Saif • Anas</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
