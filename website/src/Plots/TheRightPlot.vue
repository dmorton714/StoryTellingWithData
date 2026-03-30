<script setup>
// Logic for Section One goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Choosing the Right Plot</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> A chart is a tool for answering a specific question. Before you open your graphing software, you must know what relationship you are trying to show.
    </div>

    <div class="editorial-block">
      <p>
        The biggest mistake beginners make is picking a chart type based on what looks visually interesting, rather than what the data actually requires. To choose the right plot, you need to identify your primary objective. What are you trying to help your audience see?
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Showing Comparisons</h2>
      <p>
        If your goal is to compare values across different categories (e.g., Sales by Region, Sleep Quality by Occupation), you need charts that make length or position easy to compare.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Bar Chart (Horizontal):</strong> The gold standard for comparing categorical data. Use horizontal bars when your category names are long to make them easy to read.
        </li>
        <li>
          <strong>Column Chart (Vertical):</strong> Best for showing a small number of categories, especially if they have a natural chronological order (like months of the year).
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Showing Trends Over Time</h2>
      <p>
        If your goal is to show how a metric changes over days, months, or years, the viewer's eye needs to follow a continuous path.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Line Chart:</strong> The most intuitive way to show change over time. It connects individual data points to highlight the overall trajectory (upward, downward, or volatile).
        </li>
        <li>
          <strong>Area Chart:</strong> Similar to a line chart, but the area below the line is filled. This is useful when you want to emphasize the total volume or magnitude of the trend, not just the changes in value.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Exploring Relationships</h2>
      <p>
        If your goal is to see if two numerical variables affect one another (e.g., Does more screen time lead to longer sleep latency?), you need to plot them against each other.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Scatter Plot:</strong> Plots individual data points on an X and Y axis to reveal correlations, clusters, or outliers.
        </li>
        <li>
          <strong>Bubble Chart:</strong> A scatter plot that adds a third variable by changing the size of the data points. <em>(Use with caution: humans are bad at estimating the area of circles, making exact comparisons difficult).</em>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Showing Part-to-Whole Composition</h2>
      <p>
        If your goal is to show how a total is broken down into individual shares (e.g., Market share by company, Budget allocation).
      </p>
      <ul class="concept-list">
        <li>
          <strong>100% Stacked Bar Chart:</strong> Excellent for comparing part-to-whole relationships across multiple groups or time periods.
        </li>
        <li>
          <strong>Pie / Donut Chart:</strong> Best used <em>only</em> when you have 2 to 3 categories with drastically different sizes. If you have 5+ slices of similar sizes, a bar chart is almost always a better choice.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">5. Understanding Distributions</h2>
      <p>
        If your goal is to see the "shape" of your data, find the average, and spot anomalies (e.g., What is the age range of our customers?).
      </p>
      <ul class="concept-list">
        <li>
          <strong>Histogram:</strong> Groups continuous data into "bins" (ranges) to show where the majority of values fall and where the outliers are.
        </li>
        <li>
          <strong>Box Plot:</strong> Summarizes data using percentiles. Great for comparing the distribution, median, and spread across several different categories at once.
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
