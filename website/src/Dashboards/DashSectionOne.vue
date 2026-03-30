<script setup>
// Logic for Dash Section One goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Defining the User Persona</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> A dashboard is not a data dump; it is a custom-built tool for a specific job. If you try to build one dashboard to serve the CEO, the marketing manager, and the front-line sales rep, it will fail all three of them.
    </div>

    <div class="editorial-block">
      <p>
        Before you pull a single data source or drop a chart onto a canvas, you must answer two questions: <em>Who is looking at this?</em> and <em>What decision are they trying to make right now?</em> Dashboards generally fall into three categories based on the persona using them.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Executive (Strategic Dashboards)</h2>
      <p>
        Executives need a 30,000-foot view of the business to monitor long-term goals and overall health.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Goal:</strong> "Is the ship sailing or sinking?" They need to know immediately if the company is on target.
        </li>
        <li>
          <strong>Design Requirements:</strong> High-level Key Performance Indicators (KPIs), year-over-year trends, and clear "Status" colors (Green = Good, Red = Bad).
        </li>
        <li>
          <strong>Interactivity:</strong> Very low. Do not expect an executive to use complex filters or drill down into the data. If there is a problem, they aren't going to investigate the raw data; they are going to call a manager.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The Manager (Analytical Dashboards)</h2>
      <p>
        Middle management needs to understand <em>why</em> the executive's dashboard is flashing red. They manage teams, budgets, and regional performance.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Goal:</strong> "Why are we off track, and where is the bottleneck?"
        </li>
        <li>
          <strong>Design Requirements:</strong> High data density. They need to see how different variables interact (e.g., Sales by Region vs. Marketing Spend by Region).
        </li>
        <li>
          <strong>Interactivity:</strong> Very high. This persona needs robust filters (date ranges, product categories, geographic locations) and the ability to drill down from a high-level summary straight into the underlying details.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Front-Line Worker (Operational Dashboards)</h2>
      <p>
        Operational dashboards track fast-moving processes. They are used by people on the ground—like factory floor managers, customer support agents, or server admins.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Goal:</strong> "What requires my immediate attention right now?"
        </li>
        <li>
          <strong>Design Requirements:</strong> Simplicity and real-time accuracy. The data must be up-to-the-minute. Alerts and thresholds are critical here (e.g., "Warning: Server capacity at 95%").
        </li>
        <li>
          <strong>Interactivity:</strong> Low to Medium. The user should not have to dig for the answer; the dashboard should aggressively highlight whatever is broken or needs an action.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The Persona Interview</h2>
      <p>
        You cannot guess what your persona needs. You have to interview them before you build.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Magic Question:</strong> Never ask an end-user, <em>"What data do you want to see?"</em> They will say "everything," resulting in a cluttered mess. Instead, ask: <strong><em>"What is the first question you ask your team on Monday morning?"</em></strong>
        </li>
        <li>
          <strong>Wireframing:</strong> Sketch the dashboard on a piece of paper or a whiteboard first. Show it to your persona and ask them to point to where they would look to solve their Monday morning problem. If they hesitate, your layout needs work.
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
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.concept-list > li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.concept-list strong {
  font-size: 1.15rem;
  display: block;
  margin-bottom: 5px;
  color: var(--color-dark, #000);
}

.sub-list {
  list-style: disc;
  margin-top: 10px;
  padding-left: 20px;
  color: var(--color-muted, #555);
}

.sub-list li {
  margin-bottom: 8px;
}
</style>
