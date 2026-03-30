<script setup>
// Logic for Dash Section Two goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Visual Hierarchy & Layout</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> A user should be able to look at your dashboard and know if the business is healthy or failing within five seconds. If they have to hunt for the answer, your layout is broken.
    </div>

    <div class="editorial-block">
      <p>
        In western cultures, we read top-to-bottom and left-to-right. When people open a new dashboard, their eyes naturally follow an "F" or "Z" pattern. Visual hierarchy is the practice of placing your data along that natural path, ensuring the most critical information is seen first.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Most Valuable Real Estate</h2>
      <p>
        The top-left corner of your dashboard is the first thing every user will see. Do not waste this space.
      </p>
      <ul class="concept-list">
        <li>
          <strong>What Goes Here:</strong> Your single most important Key Performance Indicator (KPI). If the dashboard is about Sales, the top-left corner should be "Total Revenue."
        </li>
        <li>
          <strong>What NEVER Goes Here:</strong> A massive company logo, a giant title, or a complex, multi-layered scatter plot that takes two minutes to read.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The 3-Tier Architecture</h2>
      <p>
        The most effective dashboards follow a strict, horizontal three-tier structure that moves from high-level summaries down to granular details.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Tier 1: High-Level KPIs (The "What"):</strong> A row across the very top of the screen featuring large text numbers (often called BANs: "Big-Ass Numbers"). This gives the immediate pulse. (e.g., Total Revenue, Total Users, Churn Rate).
        </li>
        <li>
          <strong>Tier 2: Trends & Context (The "Why"):</strong> The middle of the screen. This is where your charts live. They provide context to the KPIs above them. (e.g., A line chart showing Revenue over the last 12 months, or a bar chart showing Revenue by Region).
        </li>
        <li>
          <strong>Tier 3: Granular Detail (The "Who/Where"):</strong> The bottom of the screen. This is usually reserved for a raw data table or list. If the middle tier shows sales are down in the West, the bottom tier lists the specific underperforming stores in the West.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Grouping and Whitespace</h2>
      <p>
        Cognitive load increases exponentially with every border, gridline, and cramped chart you add to the screen.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Gestalt Principle of Proximity:</strong> Humans assume things that are placed close together are related. Instead of putting heavy black borders around every chart, use empty space (whitespace) to group related metrics together.
        </li>
        <li>
          <strong>Let It Breathe:</strong> Resist the urge to fill every pixel. Empty space is not "wasted" space; it is the padding that allows your audience's eyes to rest and process the data.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The Scrolling Debate</h2>
      <p>
        Historically, designers were taught to keep everything "above the fold" (no scrolling allowed). Modern web habits have changed this.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Modern Rule:</strong> Scrolling is perfectly fine, <em>as long as</em> Tier 1 (your main KPIs) and Tier 2 (your primary context charts) are visible immediately upon loading. Push the heavy data tables and secondary metrics below the fold.
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
