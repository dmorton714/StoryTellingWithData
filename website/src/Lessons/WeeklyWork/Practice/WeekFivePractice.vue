<script setup>
// Logic for Week Five Practice goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Week Five Practice & Apply</h1>

    <div class="goal-callout">
      <strong>In this section we will practice:</strong>
      <ul class="sub-list">
        <li>Identifying misleading visuals.</li>
        <li>Recognizing where bias may enter the storytelling process.</li>
        <li>Thinking critically about fairness, accuracy, and trust.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 1: Spot the Problem</h2>
      <p>
        Imagine a bar chart comparing two years of results. The bars look dramatically different, but the y-axis begins
        at 90 instead of 0.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>Why might this visual be misleading?</li>
        <li>How could it affect the audience’s interpretation?</li>
        <li>What change would make the comparison more honest?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 2: Where Could Bias Enter?</h2>
      <p>
        A survey on job satisfaction is sent only to employees who work daytime shifts, but the results are presented as
        if they represent the full organization.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>What kind of bias might be present here?</li>
        <li>Who is missing from the data?</li>
        <li>How might the story change if more voices were included?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Practice 3: Ask the Ethical Question</h2>
      <p>
        A presenter wants to highlight a dramatic trend, so they only show the months where the change was most extreme.
      </p>
      <p><strong>Questions to think about:</strong></p>
      <ul class="sub-list">
        <li>Is the chart technically accurate?</li>
        <li>Could it still be misleading?</li>
        <li>What context should be included for the audience to understand the full picture?</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Reflection</h2>
      <p>
        Ethical data storytelling is not just about avoiding obvious errors. It is also about being honest, fair, and
        careful in how the story is framed.
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