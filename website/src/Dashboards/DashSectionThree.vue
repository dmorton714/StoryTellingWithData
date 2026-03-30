<script setup>
// Logic for Dash Section Three goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Designing for Interactivity</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Interactivity should empower the user to explore, not force them to work. Every filter, button, and tooltip must serve a purpose: to reveal deeper layers of data without cluttering the initial view.
    </div>

    <div class="editorial-block">
      <p>
        A static chart tells one story. An interactive dashboard tells a thousand. Interactivity is what separates a "report" from a "tool." However, too many options can lead to <strong>Analysis Paralysis</strong>. Your goal is to provide just enough control so the user can find their own "Why."
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Global Filters & Slicers</h2>
      <p>
        Global filters allow a user to change the context of the entire dashboard at once.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Date Picker:</strong> The most common and essential filter. Ensure your dashboard defaults to a meaningful timeframe (e.g., "Last 30 Days") rather than forcing the user to select one every time they log in.
        </li>
        <li>
          <strong>Standardized Placement:</strong> Users expect filters to be in one of two places: a top horizontal bar or a left-hand sidebar. Pick one and be consistent across every dashboard in your organization.
        </li>
        <li>
          <strong>The "Apply" Button:</strong> For dashboards connected to massive datasets, use an "Apply" button for filters. This prevents the dashboard from trying to re-calculate every single chart every time a user checks a single box, which ruins the performance.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Drill-Downs and Drill-Throughs</h2>
      <p>
        Drill-downs allow users to move from a high-level aggregate to a more specific category within the same chart.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Hierarchical Thinking:</strong> Design your data in logical steps. (e.g., Clicking on a bar for "North America" should "drill down" to show "USA, Canada, Mexico." Clicking "USA" should show "California, Texas, New York.")
        </li>
        <li>
          <strong>The "Back" Button:</strong> Always provide a clear, visible way for the user to "drill up" or reset the view. Users who feel "trapped" in a specific view will stop using the dashboard.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Tooltips (Data on Demand)</h2>
      <p>
        Tooltips are the secret weapon of clean design. They allow you to hide secondary details until the user specifically asks for them by hovering.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Beyond the Raw Number:</strong> Don't just repeat what the chart already shows. Use tooltips to provide extra context. (e.g., If a user hovers over a sales bar, the tooltip could show the <em>Year-over-Year % change</em> or the <em>Top Sales Rep</em> for that specific bar).
        </li>
        <li>
          <strong>Visual Tooltips:</strong> Modern dashboarding tools allow you to put "mini-charts" inside tooltips. Hovering over a regional total could reveal a tiny sparkline of that region's performance over time.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Guided Analytics</h2>
      <p>
        Sometimes users don't know what to filter. Guided analytics uses the dashboard itself as a navigation tool.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Cross-Filtering:</strong> Clicking a slice of a pie chart or a bar in a bar chart should automatically filter the rest of the dashboard's visuals to match that selection. This creates a cohesive, "live" feeling as the user explores the page.
        </li>
        <li>
          <strong>Reset All:</strong> Always include a prominent "Reset All Filters" button. It’s the "Home" button for your data, giving users the confidence to explore knowing they can always get back to the start.
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
