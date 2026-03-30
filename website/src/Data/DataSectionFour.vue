<script setup>
// Logic for Data Section Four goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Exploratory Data Analysis (EDA)</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> EDA is about getting to know your data without an agenda. It is the rapid, messy, investigative phase where you ask questions, spot trends, and actually find the story before you try to present it.
    </div>

    <div class="editorial-block">
      <p>
        If data cleaning is prepping your ingredients, Exploratory Data Analysis (EDA) is tasting the soup as it cooks. During EDA, you are not trying to build a beautiful dashboard for the CEO. You are generating dozens of rapid-fire, "ugly" charts just for your own eyes to understand the shape, limits, and secrets of your dataset.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Shape of the Data</h2>
      <p>
        Before looking at relationships, you must look at individual variables (Univariate analysis) to understand their baseline reality.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Distributions:</strong> Plot a quick histogram of your numerical columns. Is the data forming a perfect bell curve, or is it heavily skewed to the left or right? Knowing the skew tells you whether to rely on the mean or the median moving forward.
        </li>
        <li>
          <strong>The Min and Max:</strong> What are the absolute lowest and highest values in your dataset? If your profit margins range from -500% to +10%, you instantly know you have a major issue (or a massive story) dragging the bottom down.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Finding Relationships</h2>
      <p>
        Once you understand the individual metrics, you start combining them (Bivariate analysis) to see how they interact.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Scatter Plotting Everything:</strong> EDA is the time to throw variables against the wall to see what sticks. Plot "Marketing Spend" against "New Signups." Do they trend upwards together?
        </li>
        <li>
          <strong>Correlation vs. Intuition:</strong> Sometimes the data confirms what you suspect (higher discounts lead to more sales). The real gold is found when the data contradicts your intuition. If a region has the highest number of salespeople but the lowest revenue, you have just found the hook for your data story.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Segmenting the Data</h2>
      <p>
        High-level aggregates often hide the most interesting insights. You have to slice the data into smaller cohorts.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Simpson's Paradox:</strong> A famous statistical phenomenon where a trend appears in several different groups of data but disappears or completely reverses when these groups are combined.
        </li>
        <li>
          <strong>The Drill-Down:</strong> If overall website traffic is "steady," that sounds boring. But if you segment it by device and see that Mobile traffic is up 40% while Desktop traffic is down 40%, the aggregate "steady" line was hiding a massive shift in user behavior.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The "Ugly Chart" Rule</h2>
      <p>
        Speed is your greatest asset during EDA.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Turn Off the Polish:</strong> Do not waste time formatting axes, picking custom hex codes, or writing active titles during EDA. Use your software's default settings to generate a chart in two seconds, glance at it, and move on.
        </li>
        <li>
          <strong>Filter Ruthlessly:</strong> Out of the 50 exploratory charts you generate during this phase, only 1 or 2 will actually make it into your final presentation. EDA is a process of elimination.
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
