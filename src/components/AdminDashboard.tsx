'use client';

import { useState, useEffect } from 'react';
import styles from './AdminDashboard.module.css';
import { useAuth } from '@/context/AuthContext';

export default function AdminDashboard() {
  const { isAdmin, user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalBookings: 342,
    revenue: 1245000,
    topDestination: 'Dubai (DXB)',
    activeUsers: 843,
    aiQueries: 5214,
    systemHealth: 99.9,
    serverLoad: 32
  };

  const aiLogs = [
    { id: 1, query: "Find me the cheapest flight to London", intent: "Flight Search", status: "Success", time: "2 mins ago" },
    { id: 2, query: "I have a budget of 5000 AED for a family of 4", intent: "Budget Optimization", status: "Success", time: "15 mins ago" },
    { id: 3, query: "Recommend a luxury hotel near the airport", intent: "Hotel Search", status: "Success", time: "1 hour ago" },
    { id: 4, query: "What are the baggage rules for Emirates?", intent: "Information", status: "Success", time: "3 hours ago" }
  ];

  if (!isAdmin) return null;

  return (
    <div className={`${styles.container} glass`}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <span className={styles.adminIcon}>🛡️</span>
          <div>
            <h2>Admin Dashboard</h2>
            <p>Welcome back, {user?.name}. System Overview & Analytics</p>
          </div>
        </div>
        <div className={styles.healthBadge}>
          <span className={styles.pulse}></span>
          System Healthy
        </div>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${activeTab === 'overview' ? styles.activeTab : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
        <button className={`${styles.tab} ${activeTab === 'ai' ? styles.activeTab : ''}`} onClick={() => setActiveTab('ai')}>AI Analytics</button>
        <button className={`${styles.tab} ${activeTab === 'inventory' ? styles.activeTab : ''}`} onClick={() => setActiveTab('inventory')}>Inventory</button>
      </div>

      {activeTab === 'overview' && (
        <div className={styles.tabContent}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>💰</div>
              <div className={styles.statInfo}>
                <span className={styles.label}>Total Revenue</span>
                <span className={styles.value}>{stats.revenue.toLocaleString()} AED</span>
                <span className={styles.trend}>+12.5% this week</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>✈️</div>
              <div className={styles.statInfo}>
                <span className={styles.label}>Total Bookings</span>
                <span className={styles.value}>{stats.totalBookings}</span>
                <span className={styles.trend}>+5% this week</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statInfo}>
                <span className={styles.label}>Active Users</span>
                <span className={styles.value}>{stats.activeUsers}</span>
                <span className={styles.trend}>+18 new today</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>⚡</div>
              <div className={styles.statInfo}>
                <span className={styles.label}>System Load</span>
                <span className={styles.value}>{stats.serverLoad}%</span>
                <span className={styles.trendNeutral}>Stable</span>
              </div>
            </div>
          </div>

          <div className={styles.chartSection}>
            <div className={styles.chartCard}>
              <h3>User Growth (Simulated)</h3>
              <div className={styles.barChart}>
                <div className={styles.barWrapper}><div className={styles.bar} style={{ height: '40%' }}></div><span>Mon</span></div>
                <div className={styles.barWrapper}><div className={styles.bar} style={{ height: '65%' }}></div><span>Tue</span></div>
                <div className={styles.barWrapper}><div className={styles.bar} style={{ height: '85%' }}></div><span>Wed</span></div>
                <div className={styles.barWrapper}><div className={styles.bar} style={{ height: '50%' }}></div><span>Thu</span></div>
                <div className={styles.barWrapper}><div className={styles.bar} style={{ height: '90%' }}></div><span>Fri</span></div>
                <div className={styles.barWrapper}><div className={styles.bar} style={{ height: '100%' }}></div><span>Sat</span></div>
                <div className={styles.barWrapper}><div className={styles.bar} style={{ height: '70%' }}></div><span>Sun</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ai' && (
        <div className={styles.tabContent}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🧠</div>
              <div className={styles.statInfo}>
                <span className={styles.label}>Total AI Queries</span>
                <span className={styles.value}>{stats.aiQueries}</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>⏱️</div>
              <div className={styles.statInfo}>
                <span className={styles.label}>Avg Response Time</span>
                <span className={styles.value}>1.2s</span>
              </div>
            </div>
          </div>

          <div className={styles.management}>
            <h3>Recent AI Interactions</h3>
            <div className={styles.tableResponsive}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>User Query</th>
                    <th>Intent Identified</th>
                    <th>Status</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {aiLogs.map(log => (
                    <tr key={log.id}>
                      <td className={styles.queryCell}>"{log.query}"</td>
                      <td><span className={styles.tag}>{log.intent}</span></td>
                      <td><span className={styles.active}>{log.status}</span></td>
                      <td className={styles.timeCell}>{log.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'inventory' && (
        <div className={styles.tabContent}>
          <div className={styles.management}>
            <div className={styles.tableHeader}>
              <h3>Inventory Management</h3>
              <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>+ Add Item</button>
            </div>
            <div className={styles.tableResponsive}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>F001</td>
                    <td>DXB &rarr; LHR (Emirates)</td>
                    <td>Flight</td>
                    <td><span className={styles.active}>Active</span></td>
                    <td><button className={styles.editBtn}>Edit</button></td>
                  </tr>
                  <tr>
                    <td>F002</td>
                    <td>AUH &rarr; JFK (Etihad)</td>
                    <td>Flight</td>
                    <td><span className={styles.active}>Active</span></td>
                    <td><button className={styles.editBtn}>Edit</button></td>
                  </tr>
                  <tr>
                    <td>H005</td>
                    <td>Burj Al Arab</td>
                    <td>Hotel</td>
                    <td><span className={styles.active}>Active</span></td>
                    <td><button className={styles.editBtn}>Edit</button></td>
                  </tr>
                  <tr>
                    <td>H006</td>
                    <td>Atlantis The Palm</td>
                    <td>Hotel</td>
                    <td><span className={styles.inactive}>Maintenance</span></td>
                    <td><button className={styles.editBtn}>Edit</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
