<script setup>
// Logic for Dash Section Five goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Color Theory & Accessibility</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> In a dashboard, color is information. It should be used to alert, categorize, and highlight—not just to "look nice." If your dashboard is a rainbow, your user won't know where to look first.
    </div>

    <div class="editorial-block">
      <p>
        Effective dashboard design uses a neutral base with strategic pops of color. By keeping 90% of your dashboard in muted tones (grays, whites, and light blues), you ensure that when you <em>do</em> use a bright color, it instantly commands the user's attention.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Semantic Color & Status</h2>
      <p>
        Semantic colors are colors that carry an inherent meaning in a specific culture or industry.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Traffic Light Palette:</strong> Red, Yellow, and Green are the most powerful colors in dashboarding. They signal "Critical," "Warning," and "Healthy."
        </li>
        <li>
          <strong>Consistency is Key:</strong> If "Red" means a loss in your Sales chart, do not use "Red" to represent "Apples" in a fruit inventory chart on the same page. The user's brain will automatically associate Red with a problem, leading to unnecessary panic.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Designing for Color Blindness</h2>
      <p>
        Roughly 8% of men have some form of color vision deficiency (CVD), most commonly Red-Green color blindness.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The "Squint Test":</strong> If you squint your eyes and can't tell the difference between two metrics except by their hue, your dashboard isn't accessible.
        </li>
        <li>
          <strong>Safe Alternatives:</strong> Use <strong>Blue and Orange</strong> as your primary contrasting colors instead of Red and Green. They are much easier for people with CVD to distinguish.
        </li>
        <li>
          <strong>Double Encoding:</strong> Never rely on color alone to convey meaning. Use icons (like a checkmark for good or an exclamation point for bad) or direct text labels to support the color cue.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Limiting Your Palette</h2>
      <p>
        The more colors you add, the harder the user has to work to remember what each one represents.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Rule of Five:</strong> If you have more than five categories in a chart, reconsider using color to distinguish them. A horizontal bar chart with direct labels in a single color is almost always more readable than a multicolored pie chart.
        </li>
        <li>
          <strong>Muted Backgrounds:</strong> Use light grays for your axes, gridlines, and borders. This increases the "Data-to-Ink Ratio" and makes your actual data points pop off the screen.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. High-Contrast Alerting</h2>
      <p>
        Dashboards should act like a cockpit: everything is calm until something needs a pilot's attention.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Alerting Thresholds:</strong> Only turn a KPI "Red" if it has crossed a specific, meaningful threshold. If a metric is 0.1% below target, a yellow warning or a neutral gray is often more appropriate than a "Critical" red alert.
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
