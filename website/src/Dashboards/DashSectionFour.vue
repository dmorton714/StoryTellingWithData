<script setup>
// Logic for Dash Section Four goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Real-time vs. Static Data</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Just because you *can* stream data in real-time doesn't mean you *should*. The frequency of your data updates should match the speed at which your user can actually make a decision.
    </div>

    <div class="editorial-block">
      <p>
        One of the first questions a stakeholder will ask is, "Is this live?" While "Live" sounds better, it comes with significant costs in terms of performance, budget, and data complexity. Choosing the right "Data Latency" is a strategic design choice, not just a technical one.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Real-Time & Streaming Data</h2>
      <p>
        Real-time data updates every few seconds or milliseconds. It is designed for immediate, tactical responses.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Operational dashboards where seconds matter (e.g., Stock trading platforms, server health monitoring, emergency response logistics, or high-volume e-commerce flash sales).
        </li>
        <li>
          <strong>The Trade-off:</strong> It is incredibly resource-intensive. Constant queries can slow down your source databases and increase cloud computing costs significantly. Furthermore, real-time data is "noisy"—it's easy to mistake a 5-minute random fluctuation for a major trend.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Static & Scheduled Snapshots</h2>
      <p>
        Static data is updated at specific intervals (e.g., hourly, daily, or weekly). This is the standard for most business intelligence.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Strategic and Analytical dashboards (e.g., Monthly sales reports, quarterly goal tracking, or marketing campaign reviews).
        </li>
        <li>
          <strong>The Benefit:</strong> It allows for "Data Validation." Because the data isn't moving, analysts can ensure the numbers are accurate before the CEO sees them. It also allows for much faster dashboard loading times, as the charts are reading from a pre-calculated "snapshot" rather than a live database.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Transparency Rule</h2>
      <p>
        The biggest cause of "Dashboard Distrust" is a user not knowing how fresh the data is.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The "Last Refresh" Timestamp:</strong> Every dashboard, without exception, should have a "Data as of: [Timestamp]" label, usually in the top-right or bottom-right corner.
        </li>
        <li>
          <strong>Managing Expectations:</strong> If a dashboard only updates once a day at 6:00 AM, tell the user. This prevents them from calling the IT department because a sale they made ten minutes ago isn't showing up yet.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Matching Latency to Decisions</h2>
      <p>
        To decide between Live and Static, look at the "Action Cycle" of the user.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Question:</strong> If a metric changes right now, can the user actually do something about it right now?
          <br><br>
          <em>Example:</em> If you are monitoring a social media ad spend, an <strong>hourly</strong> update is great so you can kill a bad ad. But if you are monitoring the "Annual Employee Retention Rate," a <strong>real-time</strong> feed is useless because you only make retention strategy changes once or twice a year.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* CONTAINER */
.lesson-content {
  max-width: 800px;
  color: var(--color-dark, #222);
  line-height: 1.7;
  font-size: 1.05rem;
  padding-bottom: 40px;
}

/* TYPOGRAPHY */
.lesson-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1em;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.editorial-block {
  margin-bottom: 2.5rem;
}

.subsection-title {
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid var(--color-dark, #222);
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-weight: 600;
}

/* CALLOUTS & HIGHLIGHTS */
.goal-callout {
  background: rgba(0, 0, 0, 0.04);
  border-left: 4px solid var(--color-dark, #222);
  padding: 15px 20px;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

/* LISTS */
.concept-list {
  list-style: none;
  padding-left: 0;
}

.concept-list > li {
  margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.concept-list > li:last-child {
  border-bottom: none; padding-bottom: 0;
}

.concept-list strong {
  font-size: 1.15rem; display: block; margin-bottom: 5px; color: var(--color-dark, #000);
}

.sub-list {
  list-style: disc; margin-top: 10px; padding-left: 20px; color: var(--color-muted, #555);
}

.sub-list li {
  margin-bottom: 8px;
}
</style>
