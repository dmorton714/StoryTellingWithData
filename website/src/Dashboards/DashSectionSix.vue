<script setup>
// Logic for Dash Section Six goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Performance & Optimization</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Performance is a feature. A dashboard that takes 30 seconds to load is a dashboard that nobody will use. Speed builds trust; lag creates frustration.
    </div>

    <div class="editorial-block">
      <p>
        As your organization grows, so does your data. What worked for a small CSV file will likely crawl to a halt when connected to a multi-million row database. Optimizing a dashboard is a balance between providing deep insights and maintaining a lightning-fast user experience.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Aggregate at the Source</h2>
      <p>
        The most common cause of slow dashboards is forcing the front-end software to do heavy math on millions of raw rows.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Push Down the Processing:</strong> Whenever possible, use SQL or your data warehouse to aggregate data *before* it reaches the dashboard. Instead of sending 1 million individual sales transactions, send a table of "Sales per Day" (365 rows).
        </li>
        <li>
          <strong>The Result:</strong> Your dashboard only has to render the final numbers, making it feel instant to the end user.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Efficient Data Modeling</h2>
      <p>
        How you structure your tables determines how fast your filters will react.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The "Star Schema":</strong> Organize your data into one large "Fact Table" (the numbers) surrounded by smaller "Dimension Tables" (the labels like Dates, Products, or Regions). This is the gold standard for high-performance analytics.
        </li>
        <li>
          <strong>Avoid "Wide" Tables:</strong> A table with 200 columns is much slower to query than a table with 10 columns. Only bring in the specific columns you need for the story you are telling.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Limiting Visual Complexity</h2>
      <p>
        Every chart on your dashboard is a separate query to the database.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Rule of 10:</strong> If you have more than 10-12 visual elements (charts, KPIs, filters) on a single page, you are likely hurting performance.
        </li>
        <li>
          <strong>High-Cardinality Filters:</strong> A dropdown filter with 5,000 unique names in it is a performance killer. Use a search bar or a "Top 10" filter instead to keep the interface snappy.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Extracts and Caching</h2>
      <p>
        If your data doesn't *need* to be live, don't make it live.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Data Extracts:</strong> Most modern tools (like Tableau or Power BI) allow you to take a "snapshot" of the data and store it in the tool's high-speed memory. This is significantly faster than querying a live database every time a user clicks a button.
        </li>
        <li>
          <strong>Query Caching:</strong> Many systems can "cache" (remember) the results of a common query. If 50 people look at the same "Weekly Sales" chart, the system only calculates it once and serves the saved result to the other 49.
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
