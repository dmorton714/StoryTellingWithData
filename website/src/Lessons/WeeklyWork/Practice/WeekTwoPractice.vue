<script setup>
// Logic for Week Two Practice goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Week Two Practice & Apply</h1>

    <div class="goal-callout">
      <strong>In this section we will practice:</strong>
      <ul class="sub-list">
        <li>Starting with a better question.</li>
        <li>Thinking about what data is actually needed.</li>
        <li>Adjusting ideas based on audience and purpose.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 1: Rewrite the Question</h2>
      <p>
        Weak questions often lead to weak visualizations. A broad question may not help you determine what data matters
        or what story you are trying to tell.
      </p>
      <p><strong>Rewrite each of these into a stronger question:</strong></p>
      <ul class="sub-list">
        <li>“What does this dataset show?”</li>
        <li>“Can I make a chart from this?”</li>
        <li>“What is happening here?”</li>
      </ul>
      <p>
        Try to make each question more focused, specific, and useful.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 2: What Data Do You Really Need?</h2>
      <p>
        Imagine you want to answer this question:
        <strong>Which department has the highest employee turnover?</strong>
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>What data would help answer this question?</li>
        <li>What information might be unnecessary?</li>
        <li>Would you need totals, percentages, dates, categories, or something else?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 3: Adjust for the Audience</h2>
      <p>
        Imagine you are explaining the same data to two audiences:
      </p>
      <ul class="sub-list">
        <li>A school principal deciding where support is needed</li>
        <li>A group of teachers reviewing day-to-day classroom patterns</li>
      </ul>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>What would each audience care about most?</li>
        <li>What level of detail would each need?</li>
        <li>What would you emphasize differently for each group?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Reflection</h2>
      <p>
        Strong data storytelling does not begin with a chart. It begins with a useful question, the right data, and a
        clear sense of audience.
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