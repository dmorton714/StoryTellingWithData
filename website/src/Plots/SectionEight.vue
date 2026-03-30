<script setup>
// Logic for Section Eight goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Annotation & Storytelling</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Data does not speak for itself. If you hand someone a chart without context, they will invent their own story. Your job is to guide them to the correct conclusion instantly.
    </div>

    <div class="editorial-block">
      <p>
        A beautifully designed, perfectly chosen chart is still a failure if the audience looks at it and asks, "So what?" Annotation is the layer of context that transforms a raw graph into a strategic communication tool.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Active vs. Passive Titling</h2>
      <p>
        The title is the most valuable real estate on your chart. Do not waste it by just stating the variables.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Passive Titles (Avoid):</strong> <em>"Q3 Revenue by Region"</em> or <em>"Customer Churn Rate 2020-2023."</em> These act like an inventory label. They tell the reader what the chart contains, but not what it means.
        </li>
        <li>
          <strong>Active Titles (Use):</strong> <em>"European Region Drove Q3 Revenue Spike"</em> or <em>"Customer Churn Stabilized After the 2022 Pricing Update."</em> This gives the audience the main takeaway before they even process the visual data.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Direct Labeling (Kill the Legend)</h2>
      <p>
        Legends force the viewer's eyes to ping-pong back and forth between the chart and the key, drastically increasing cognitive load.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Fix:</strong> Whenever possible, put the label right next to the data. If you have a line chart with three lines, put the name of the category at the very end of the line in the same color.
        </li>
        <li>
          <strong>Highlighting Data Points:</strong> You rarely need to label every single data point on a line or bar. Only label the start, the end, the highest high, or the lowest low—whatever supports your narrative.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Explaining the "Why"</h2>
      <p>
        A chart shows <em>what</em> happened. Annotations explain <em>why</em> it happened.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Strategic Text Boxes:</strong> If there is a massive dip in your line chart in March 2020, don't assume the audience will remember there was a pandemic. Add a small text callout pointing directly to the dip that says: <em>"Global supply chain halted."</em>
        </li>
        <li>
          <strong>Reference Lines:</strong> Add horizontal or vertical lines to show goals, averages, or specific events. Seeing that revenue is $50M means much more when there is a dotted line showing that the goal was $60M.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The "So What?" (Next Steps)</h2>
      <p>
        Every piece of data storytelling should lead to an action or a decision.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Close the Loop:</strong> Either in the subtitle of the chart or in the text immediately following it, state what the audience should do with this information.
          <br><br>
          <em>Example: "Because customer churn is highest in month 3, we need to implement a 60-day check-in email sequence."</em>
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
