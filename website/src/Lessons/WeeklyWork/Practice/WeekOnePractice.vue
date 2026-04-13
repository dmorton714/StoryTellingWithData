<script setup>
// Logic for Week One Practice goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Week One Practice & Apply</h1>

    <div class="goal-callout">
      <strong>In this section we will practice:</strong>
      <ul class="sub-list">
        <li>Identifying the main takeaway of a visualization.</li>
        <li>Recognizing what makes a chart clear or confusing.</li>
        <li>Thinking about data storytelling from the audience’s perspective.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 1: Find the Main Takeaway</h2>
      <p>
        Imagine you are looking at a chart showing monthly website traffic for a nonprofit organization. The chart shows
        a large increase in visitors during the final two months of the year.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>What is the main takeaway?</li>
        <li>What would you want the audience to notice first?</li>
        <li>How would you describe the chart in one sentence?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 2: Clear or Confusing?</h2>
      <p>
        Consider a chart with a long title, ten colors, several legends, and small labels that are difficult to read.
        Even if the data is accurate, the design may make it harder for the audience to understand.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>What makes this visualization harder to read?</li>
        <li>Which parts feel unnecessary or distracting?</li>
        <li>What would you simplify first?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 3: Think About the Audience</h2>
      <p>
        A chart is being presented to two different groups: a classroom of beginners and a team of experienced analysts.
        The information is the same, but the way it should be presented may change.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>What would a beginner audience need in order to understand the chart quickly?</li>
        <li>What might an analyst expect that a beginner would not?</li>
        <li>How would your title, labels, or level of detail change for each audience?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Reflection</h2>
      <p>
        Good data storytelling starts with clarity. Before worrying about advanced design or technical tools, practice
        asking a simple question: <strong>What do I want the audience to understand?</strong>
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