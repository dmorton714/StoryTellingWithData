<script setup>
// Logic for Data Section Five goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Bias & Misleading Visuals</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Human brains process images orders of magnitude faster than text. A misleading chart will implant a false narrative in your audience's mind before they ever read the underlying numbers.
    </div>

    <div class="editorial-block">
      <p>
        In our Plotting & Visualization module, we discussed the mechanics of bad charts (like the infamous 3D pie chart or the truncated Y-axis). But the deeper danger lies in our cognitive biases. How we choose to frame our data, what we include, and what we omit can manipulate the truth without technically "lying" about the numbers.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Confirmation Bias</h2>
      <p>
        This is the most common trap for analysts and storytellers: looking for data that supports your pre-existing belief while ignoring data that contradicts it.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Trap:</strong> You launch a new marketing campaign and believe it is working. You pull a report showing website traffic is up 15% and build a whole presentation around it, completely ignoring the metric showing that actual sales are down 5%.
        </li>
        <li>
          <strong>The Fix:</strong> Play devil's advocate with your own data. Before you finalize a story, ask yourself: <em>"If I wanted to prove the exact opposite of this conclusion, what data would I use?"</em>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The Framing Effect</h2>
      <p>
        The exact same data can lead to opposite conclusions depending on how it is presented to the audience.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Psychology:</strong> Humans are naturally risk-averse. Telling a patient a surgery has a <em>"90% survival rate"</em> makes them feel safe. Telling them it has a <em>"10% mortality rate"</em> terrifies them. The math is identical; the emotional impact is entirely different.
        </li>
        <li>
          <strong>In Practice:</strong> Be aware of the emotional weight of your labels. Are you highlighting the "Success Rate" or the "Failure Rate"? The choice you make will dictate the actions your audience takes.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Spurious Correlations</h2>
      <p>
        Just because two lines on a graph move together perfectly does not mean they are actually related.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Visual Manipulation:</strong> By tweaking the scales of a dual-axis chart, you can make the divorce rate in Maine look like it is perfectly synced with the per capita consumption of margarine.
        </li>
        <li>
          <strong>The Fix:</strong> Correlation does not equal causation. Never imply that Variable A caused Variable B unless you have the domain knowledge or scientific rigorousness to prove the underlying mechanism.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The Ecological Fallacy</h2>
      <p>
        This occurs when you assume that an aggregate trend applies to every individual subset within that data.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Trap:</strong> You look at a chart showing that the average wealth of a neighborhood has skyrocketed, and you conclude that everyone in that neighborhood is getting richer.
        </li>
        <li>
          <strong>The Reality:</strong> It might just mean one billionaire moved into the neighborhood, skewing the average, while the original residents are actually getting poorer. Never assume the "average" represents the typical individual experience.
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
