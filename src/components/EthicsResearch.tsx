'use client';

import styles from './EthicsResearch.module.css';

export default function EthicsResearch() {
  return (
    <div className={styles.container}>
      <section className={`${styles.section} glass`}>
        <h2>Ethics & Transparency</h2>
        <div className={styles.grid}>
          <div className={styles.point}>
            <h3>AI Capabilities</h3>
            <p>Our advanced AI engine provides real-time travel insights, cross-referencing global datasets to offer the best recommendations for your journey.</p>
          </div>
          <div className={styles.point}>
            <h3>Smart Intelligence</h3>
            <p>Built on state-of-the-art large language models, the assistant understands complex context and provides nuanced, expert-level advice.</p>
          </div>
          <div className={styles.point}>
            <h3>Data Privacy</h3>
            <p>Security is our priority. All interactions are handled with strict encryption, ensuring your travel planning remains private and secure.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} glass`}>
        <h2>Research: AI vs. Traditional Systems</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional System</th>
                <th>AI Travel Assistant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Search Speed</td>
                <td>Requires manual filters</td>
                <td>Instant conversational search</td>
              </tr>
              <tr>
                <td>Clarity</td>
                <td>Complex grids and tables</td>
                <td>Simple English explanations</td>
              </tr>
              <tr>
                <td>Personalization</td>
                <td>Limited to selected filters</td>
                <td>Understands context (e.g., "family trip")</td>
              </tr>
              <tr>
                <td>Reliability</td>
                <td>High (Direct data)</td>
                <td>Medium (Depends on data accuracy)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.section} glass`}>
        <h2>Student Travel Tips</h2>
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <h4>💰 Saving Money</h4>
            <p>Book at least 3 weeks in advance and look for student discounts or flexible dates.</p>
          </div>
          <div className={styles.tipCard}>
            <h4>🧳 Baggage Rules</h4>
            <p>"Hand carry" is usually 7kg. "Check-in" is larger bags stored in the plane's hold.</p>
          </div>
          <div className={styles.tipCard}>
            <h4>👨‍👩‍👧‍👦 Family Travel</h4>
            <p>Always check for "Family-friendly" tags which indicate shorter layovers and better child services.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
