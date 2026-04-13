<script setup>
// Logic for Week Three Practice goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Week Three Practice & Apply</h1>

    <div class="goal-callout">
      <strong>In this section we will practice:</strong>
      <ul class="sub-list">
        <li>Matching chart types to communication goals.</li>
        <li>Recognizing when a chart choice does not fit the data.</li>
        <li>Explaining why one chart works better than another.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 1: Match the Goal to the Chart</h2>
      <p>
        For each situation below, think about what chart type would be most useful.
      </p>
      <ul class="sub-list">
        <li>Comparing enrollment across five academic programs</li>
        <li>Showing changes in donations over twelve months</li>
        <li>Exploring the relationship between hours studied and exam score</li>
        <li>Showing how survey responses are distributed across a rating scale</li>
      </ul>
      <p>
        For each one, ask yourself: <strong>What am I trying to show?</strong>
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 2: What Is Wrong With This Chart?</h2>
      <p>
        Imagine someone uses a pie chart with twelve categories to compare website traffic sources. The slices are small,
        the labels overlap, and the differences are hard to see.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>What makes this chart hard to understand?</li>
        <li>What chart would work better?</li>
        <li>Why would that alternative be clearer?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 3: Defend Your Choice</h2>
      <p>
        You have data showing employee satisfaction scores across three offices. A teammate wants to use a line chart.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>Would a line chart be the best choice here?</li>
        <li>What chart would you recommend instead?</li>
        <li>How would you explain your reasoning to your teammate?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Reflection</h2>
      <p>
        Good chart selection is not about creativity for its own sake. It is about choosing the form that makes the
        audience’s job easier.
      </p>
    </div>
  </div>
</template>

<style scoped>
.lesson-content {
  max-width: 800px;
  color: var(--color-dark, #222);
  line-height: 1.7;
  font-size: 1.05rem;
  padding-bottom: 40px;
}

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

.goal-callout {
  background: rgba(0, 0, 0, 0.04);
  border-left: 4px solid var(--color-dark, #222);
  padding: 15px 20px;
  margin-bottom: 30px;
  font-size: 1.1rem;
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