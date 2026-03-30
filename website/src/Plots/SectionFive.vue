<script setup>
// Logic for Section Five goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Advanced Visualizations</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Advanced charts allow you to display higher dimensions of data (more variables at once), but they come at a cost: increased cognitive load for the viewer. Use them only when the basic charts fall short.
    </div>

    <div class="editorial-block">
      <p>
        Once you have mastered the foundational charts, you will eventually encounter datasets that are too dense or multi-faceted for a simple bar or line graph. Advanced visualizations help you condense complex information into a single, readable view.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Heatmap</h2>
      <p>
        A heatmap uses color intensity to represent data values within a matrix or grid. It is an incredibly efficient way to show patterns in dense datasets.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Showing concentration, frequency, or correlations across two categorical variables (e.g., Website traffic by Hour of the Day vs. Day of the Week).
        </li>
        <li>
          <strong>Pro-Tip (Color Scales):</strong> Always use a single-color sequential scale (e.g., light blue to dark blue) for data that goes from low to high. Only use a diverging scale (e.g., red to white to blue) if there is a meaningful "zero" or middle baseline you need to highlight.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The Bubble Plot</h2>
      <p>
        A bubble plot is a scatter plot that adds a third dimension: the size of the data point. You can even add a fourth dimension by using different colors for the bubbles.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Comparing three numerical variables at once (e.g., Life Expectancy on the X-axis, GDP on the Y-axis, and Population represented by the bubble size).
        </li>
        <li>
          <strong>The Danger Zone:</strong> Humans are notoriously bad at estimating the area of circles. A bubble that is twice as wide actually has <em>four times</em> the area. Ensure your charting software scales bubbles by area, not by radius, to avoid visually lying to your audience.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Stacked Area Chart</h2>
      <p>
        This chart combines the trend-showing power of a line chart with the part-to-whole breakdown of a stacked bar chart.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Showing how the total volume of something changes over time, while also showing the breakdown of the categories that make up that total (e.g., Total company revenue over 5 years, broken down by product line).
        </li>
        <li>
          <strong>The Catch:</strong> While the overall top line and the bottom-most segment are easy to read, the segments in the middle become very difficult to track because their baselines are constantly shifting. If the middle categories are the most important part of your story, use a standard line chart instead.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The Waterfall Chart</h2>
      <p>
        A staple in financial and executive reporting, the waterfall chart shows how an initial value is affected by a series of positive and negative intermediate values, leading to a final total.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Explaining the "bridge" between two numbers (e.g., How did we get from Q1 Profit to Q2 Profit? Show the revenue gained and the expenses lost in between).
        </li>
        <li>
          <strong>Pro-Tip:</strong> Use semantic colors for the floating bars: Green or blue for positive additions, and red or orange for negative deductions. Keep the starting and ending totals a neutral color like gray or black.
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
