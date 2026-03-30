<script setup>
// Logic for Data Section Two goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Choosing the Right Data</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> The most beautiful, perfectly engineered visualization in the world is completely useless if it is built on irrelevant, outdated, or untrustworthy data.
    </div>

    <div class="editorial-block">
      <p>
        In the age of the internet, finding data is easy. Finding the <em>right</em> data is incredibly difficult. Before you start cleaning or plotting, you have to act as a skeptic. You must verify that the dataset you have chosen actually answers the question you are trying to ask.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Alignment & Proxy Metrics</h2>
      <p>
        Does this data actually measure what you think it measures? Often, we can't measure exactly what we want, so we measure a "proxy" instead.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Direct Metrics:</strong> Exactly what you want to know. (e.g., If you want to know how much money you made, you look at total revenue).
        </li>
        <li>
          <strong>Proxy Metrics:</strong> A stand-in for something that is impossible or too expensive to measure directly. (e.g., You can't directly measure "Employee Happiness," so you use "Employee Turnover Rate" as a proxy).
        </li>
        <li>
          <strong>The Danger:</strong> Proxies are necessary, but they can mislead. A low turnover rate might not mean employees are happy; it might just mean the job market is terrible and they can't leave. Always be honest with your audience when you are using a proxy metric.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Evaluating the Source</h2>
      <p>
        Not all data is created equal. You must investigate the provenance (the origin) of your dataset.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Primary vs. Secondary Data:</strong> Primary data is collected by you or your organization directly (e.g., your own customer surveys). Secondary data is collected by someone else (e.g., downloading a census report). Secondary data requires much heavier scrutiny.
        </li>
        <li>
          <strong>Authority and Agenda:</strong> Who collected this data, and why? A study on the health benefits of sugar is inherently suspicious if it was funded by a soda company. Always look for reputable, neutral sources like academic institutions, government portals (e.g., data.gov), or established think tanks.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Recency and Completeness</h2>
      <p>
        Data has a shelf life. A dataset that was highly accurate five years ago might be actively misleading today.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Recency Trap:</strong> Using 2019 travel data to predict 2024 travel trends ignores the massive, structural changes caused by the global pandemic. Always ensure your data's timeframe aligns with the reality you are trying to analyze.
        </li>
        <li>
          <strong>Granularity:</strong> Is the data detailed enough? If you are trying to decide where to open a new coffee shop in Chicago, a dataset showing "Coffee Consumption by State" is too broad (low granularity) to be useful. You need data at the zip code or neighborhood level.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Blending Internal and External Data</h2>
      <p>
        The best data stories often come from combining your own proprietary data with broader context from the outside world.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Adding Context:</strong> Your internal sales data might show a 10% dip in December. Without context, that looks like a failure. But if you blend that with external economic data showing a 20% drop in industry-wide retail spending that same month, your 10% dip suddenly looks like you actually outperformed the market.
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
