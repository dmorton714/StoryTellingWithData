<script setup>
// Logic for Section Two goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Data Literacy</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> A beautiful, perfectly formatted chart that displays the wrong metric is worse than no chart at all. You must understand the context and limitations of your data before you plot it.
    </div>

    <div class="editorial-block">
      <p>
        Data literacy is the ability to read, work with, analyze, and argue with data. Before building a visualization, a data storyteller must act as an investigator. If you don't know exactly what your numbers represent, your audience won't either.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Context is Everything</h2>
      <p>
        Data does not exist in a vacuum. Before visualizing anything, you must ask questions about how the data was born.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Where did this data come from?</strong> Was it a randomized survey, an automated system log, or self-reported data? Self-reported data (like diet tracking) often contains inherent bias.
        </li>
        <li>
          <strong>What is the sample size (n)?</strong> A 100% increase in sales sounds amazing, until you realize sales went from 1 unit to 2 units. Always check if your sample size is large enough to be meaningful.
        </li>
        <li>
          <strong>What is missing?</strong> Sometimes the most important story is the data that <em>isn't</em> there. Are certain demographics excluded? Are there blank entries that represent system failures?
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Averages vs. Medians</h2>
      <p>
        "Average" is a dangerous word in data storytelling. Knowing when to use the Mean vs. the Median can completely change the story you tell.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Mean (Standard Average):</strong> Calculated by adding all values and dividing by the total count. <em>Warning:</em> The mean is highly sensitive to outliers. If nine people make $50,000 a year and one billionaire walks into the room, the "average" salary suddenly skyrockets, hiding the reality of the nine normal workers.
        </li>
        <li>
          <strong>The Median (The Middle Value):</strong> The exact middle point of your dataset when arranged from lowest to highest. When dealing with heavily skewed data (like income, home prices, or hospital wait times), the median tells a much more accurate story.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Absolute Numbers vs. Rates (Relative)</h2>
      <p>
        Choosing between raw numbers and percentages is a crucial literacy skill. Showing the wrong one can easily mislead your audience.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Absolute Numbers:</strong> The raw count (e.g., "We gained 5,000 new users"). This is great for showing sheer volume or scale.
        </li>
        <li>
          <strong>Rates / Percentages:</strong> The value relative to a total (e.g., "Our user base grew by 5%"). Rates are essential when comparing groups of different sizes.
          <br><br>
          <em>Example:</em> If City A has 500 crimes and City B has 1,000 crimes, City B looks twice as dangerous (Absolute). But if City B has ten times the population of City A, City A actually has a much higher crime <em>rate</em> (Relative).
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Correlation vs. Causation</h2>
      <p>
        Just because two lines on a chart move in the same direction does not mean one caused the other. This is one of the most common mistakes in data storytelling.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Correlation:</strong> Two variables appear to move together. For example, ice cream sales and shark attacks both spike in July. They are highly correlated.
        </li>
        <li>
          <strong>Causation:</strong> One variable actively forces the other to happen. Eating ice cream does <em>not</em> cause shark attacks. Both are caused by a hidden third variable: warmer summer weather bringing people to the beach. As a storyteller, never imply causation unless you have the scientific proof to back it up!
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
