<script setup>
// Logic for Section Three goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Knowing Your Audience</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> You are not designing the chart for yourself; you are designing it for the person consuming the information. A technically perfect chart that confuses its audience is a failed chart.
    </div>

    <div class="editorial-block">
      <p>
        Before you choose a color palette or a chart type, you need to ask: <em>Who is going to look at this?</em> The way you present data to a fellow data scientist should look completely different from how you present that exact same data to a busy CEO or the general public.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The General Public (Novice)</h2>
      <p>
        This audience has varied levels of data literacy and limited time. They need the "Aha!" moment to happen instantly.
      </p>
      <ul class="concept-list">
        <li>
          <strong>What they need:</strong> Simplicity, familiar formats, and clear takeaways.
        </li>
        <li>
          <strong>What to avoid:</strong> Logarithmic scales, dual y-axes, and complex statistical jargon. If they have to spend a minute learning <em>how</em> to read the chart, they will just scroll past it.
        </li>
        <li>
          <strong>Best Practices:</strong> Stick to standard bar charts, line graphs, and pie charts (if used correctly). Use highly descriptive, active titles (e.g., <em>"Housing Prices Peaked in July"</em> instead of <em>"Housing Prices: Jan-Dec"</em>).
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The Executive (Decision-Maker)</h2>
      <p>
        Executives and managers are starved for time. They don't want to go on an exploratory journey through your data; they want to know what happened, why it happened, and what they should do about it.
      </p>
      <ul class="concept-list">
        <li>
          <strong>What they need:</strong> Speed, actionable insights, and high-level summaries (the "So what?").
        </li>
        <li>
          <strong>What to avoid:</strong> Getting bogged down in the methodology, showing every single data point, or burying the lead.
        </li>
        <li>
          <strong>Best Practices:</strong> Highlight Key Performance Indicators (KPIs) in large text. Use color strategically—make the one metric they care about bright blue, and push all background context into a muted gray.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Technical Audience (Expert)</h2>
      <p>
        Peers, engineers, and analysts want to look under the hood. They are naturally skeptical and want to verify your findings.
      </p>
      <ul class="concept-list">
        <li>
          <strong>What they need:</strong> Depth, transparency, statistical significance, and the ability to explore the nuance.
        </li>
        <li>
          <strong>What to avoid:</strong> Over-simplification, aggressive data aggregation, or hiding outliers to make a trend look cleaner than it actually is.
        </li>
        <li>
          <strong>Best Practices:</strong> Use advanced visualizations like box plots, scatter plots, or heatmaps. Include error bars, standard deviations, and always provide a link to the raw data or your methodology.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Universal Design (Accessibility)</h2>
      <p>
        No matter your audience, you must design for accessibility. Roughly 1 in 12 men and 1 in 200 women have some form of color vision deficiency.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Don't rely solely on color:</strong> If the only way to tell the "Good" line from the "Bad" line is that one is green and one is red, you will lose a portion of your audience.
        </li>
        <li>
          <strong>Use double encoding:</strong> Distinguish lines or bars by using color <em>plus</em> another visual cue, like a dashed line, different shapes for data markers, or direct labeling right next to the data points.
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
