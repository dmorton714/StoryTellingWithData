<script setup>
// Logic for Week Four Practice goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Week Four Practice & Apply</h1>

    <div class="goal-callout">
      <strong>In this section we will practice:</strong>
      <ul class="sub-list">
        <li>Recognizing clutter and weak design choices.</li>
        <li>Thinking about visual hierarchy and emphasis.</li>
        <li>Using color more intentionally.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 1: What Draws Your Eye First?</h2>
      <p>
        Imagine a chart with a bright red title, several blue bars, a large legend, and a highlighted data point in
        green. Multiple elements are competing for attention.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>What would you notice first?</li>
        <li>Is that the most important part of the chart?</li>
        <li>How would you change the design to better guide attention?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 2: Reduce the Clutter</h2>
      <p>
        A chart includes heavy gridlines, repeated labels, decorative icons, several shades of color, and a legend that
        repeats information already written directly on the chart.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>Which elements feel unnecessary?</li>
        <li>What would you remove first?</li>
        <li>How would simplifying the chart improve clarity?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 3: Use Color With Purpose</h2>
      <p>
        You want to highlight one category in a bar chart while keeping the rest visible but less prominent.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>How could color help direct the audience’s attention?</li>
        <li>How many colors would you really need?</li>
        <li>What risks come with using too many bright colors at once?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Reflection</h2>
      <p>
        Strong design is often less about adding more and more about removing what does not help the message.
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