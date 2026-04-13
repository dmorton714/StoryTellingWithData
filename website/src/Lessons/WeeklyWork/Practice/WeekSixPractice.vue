<script setup>
// Logic for Week Six Practice goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Week Six Practice & Apply</h1>

    <div class="goal-callout">
      <strong>In this section we will practice:</strong>
      <ul class="sub-list">
        <li>Turning information into a structured story.</li>
        <li>Using annotation and titles to guide understanding.</li>
        <li>Thinking about how multiple visuals work together.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 1: Create a Beginning, Middle, and End</h2>
      <p>
        Imagine you have three visuals about student attendance:
      </p>
      <ul class="sub-list">
        <li>A chart showing overall attendance declining over time</li>
        <li>A chart comparing attendance by grade level</li>
        <li>A chart showing the biggest drop occurring on Mondays</li>
      </ul>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>Which chart should come first?</li>
        <li>Which one adds detail or evidence?</li>
        <li>Which one helps deliver the clearest takeaway?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 2: Strengthen the Title</h2>
      <p>
        A chart is currently titled: <strong>Attendance by Grade</strong>
      </p>
      <p>
        That title tells the audience what the chart is about, but it does not yet communicate a point.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>How could you rewrite the title so it includes a takeaway?</li>
        <li>What should the audience notice immediately?</li>
        <li>How can the title help guide interpretation?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 3: Use Annotation Thoughtfully</h2>
      <p>
        One point on a chart shows an unusually sharp change. You want to make sure the audience notices it.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>Would a label or callout help?</li>
        <li>What short note would you add?</li>
        <li>How do annotations improve understanding without overcrowding the chart?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Reflection</h2>
      <p>
        A strong data story helps the audience move from seeing information to understanding why it matters.
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