<script setup>
// Logic for Section Four goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Basic Chart Types</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Master the foundations before getting fancy. 90% of business and scientific communication can—and should—be done using these four basic chart types.
    </div>

    <div class="editorial-block">
      <p>
        There is a reason bar charts and line graphs are everywhere: our brains are incredibly good at decoding them instantly. While it might be tempting to use a complex, novel visualization to impress your audience, clarity should always be your top priority.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Bar Chart</h2>
      <p>
        The undisputed king of categorical comparison. Our eyes are highly trained to compare the lengths of straight lines aligned on a common baseline.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Comparing quantities across different categories (e.g., Revenue by Product, Population by Country).
        </li>
        <li>
          <strong>Pro-Tip (Sort Your Data):</strong> Always sort your bars by value (largest to smallest or vice versa) unless the categories have a natural chronological or alphabetical order. A disorganized bar chart forces the viewer to jump around to find the winner.
        </li>
        <li>
          <strong>Pro-Tip (Start at Zero):</strong> The baseline of a bar chart <em>must</em> start at zero. Because we judge bars by their length, starting the axis at an arbitrary number visually distorts the data and is considered a cardinal sin in data visualization.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The Line Chart</h2>
      <p>
        The absolute best tool for showing how a metric evolves. The physical connection between the dots implies a relationship from one point to the next.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Continuous data, usually over time (e.g., Stock prices over a year, Monthly website traffic).
        </li>
        <li>
          <strong>Pro-Tip (Don't Overcrowd):</strong> If you have more than 4 or 5 lines on a single chart, it becomes a "Spaghetti Chart"—a tangled, unreadable mess. If you need to show many categories, highlight the one important line in a bold color and make the rest light gray.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Scatter Plot</h2>
      <p>
        The go-to chart for showing the relationship (or lack thereof) between two different numerical variables.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Identifying correlations, clusters, and outliers in large datasets (e.g., Plotting Employee Age on the X-axis against Salary on the Y-axis).
        </li>
        <li>
          <strong>Pro-Tip (Add a Trendline):</strong> Scatter plots can sometimes look like a random cloud of dots to a novice audience. Adding a "line of best fit" (trendline) instantly helps them see the general direction of the relationship.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The Pie Chart (Use with Caution)</h2>
      <p>
        Pie charts are incredibly popular, but data visualization experts generally dislike them. Humans are notoriously bad at comparing the angles and areas of slices, especially when they are similar in size.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Best For:</strong> Showing a strict part-to-whole relationship where there are only 2 or 3 distinct categories, and one slice is overwhelmingly dominant (e.g., A yes/no vote).
        </li>
        <li>
          <strong>The Rules of the Pie:</strong>
          <ul class="sub-list">
            <li>The total must always sum to exactly 100%.</li>
            <li>Never use 3D effects. Tilting a pie chart distorts the perspective, making slices in the front look artificially larger.</li>
            <li>If you have more than 4 slices, use a horizontal bar chart instead. Your audience will thank you.</li>
          </ul>
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
