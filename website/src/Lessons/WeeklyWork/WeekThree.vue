<script setup>
// Logic for Week Three goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Choosing the Right Chart</h1>

    <div class="goal-callout">
      <strong>In this section we will learn:</strong>
      <ul class="sub-list">
        <li>How to match chart types to your communication goal.</li>
        <li>Why the wrong chart can confuse your audience.</li>
        <li>How to choose visuals that support clarity instead of complexity.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Start With the Purpose</h2>
      <p>
        Choosing a chart is not about picking the most visually interesting option. It is about selecting the visual
        form that communicates your message most clearly.
      </p>
      <p>
        A useful first question is: <strong>What am I trying to show?</strong> Different charts are better suited for
        different goals, and once you know the purpose, the chart choice becomes much easier.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Common Goals and Common Chart Types</h2>
      <ul class="concept-list">
        <li>
          <strong>Comparison</strong>
          <p>
            If you want to compare values across categories, bar charts are often the clearest choice.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Sales by region, students by pathway, revenue by product</li>
            <li><em>Common Chart:</em> Bar chart</li>
          </ul>
        </li>
        <li>
          <strong>Trend Over Time</strong>
          <p>
            If you want to show how something changes over time, line charts are usually the most effective.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Attendance over six months, website traffic by week, temperature by day</li>
            <li><em>Common Chart:</em> Line chart</li>
          </ul>
        </li>
        <li>
          <strong>Distribution</strong>
          <p>
            If you want to show how values are spread out, histograms and box plots can help reveal the shape and range
            of the data.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Exam score distribution, age distribution, salary distribution</li>
            <li><em>Common Charts:</em> Histogram, box plot</li>
          </ul>
        </li>
        <li>
          <strong>Relationship Between Variables</strong>
          <p>
            If you want to explore how two numerical variables relate to one another, scatter plots are often useful.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Study time vs test score, advertising spend vs sales</li>
            <li><em>Common Chart:</em> Scatter plot</li>
          </ul>
        </li>
        <li>
          <strong>Parts of a Whole</strong>
          <p>
            If you want to show proportions, charts such as stacked bars or pie charts can be used, though these should
            be used carefully.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Budget allocation, market share, percentage of responses</li>
            <li><em>Common Charts:</em> Stacked bar chart, pie chart</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Why the Wrong Chart Causes Problems</h2>
      <p>
        A chart can be visually polished and still be a poor choice. When the chart type does not match the purpose,
        the audience has to work harder to understand the message, and sometimes the message becomes distorted entirely.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Too Many Categories in a Pie Chart</strong>
          <p>
            Pie charts become difficult to read when there are too many slices or when the differences are subtle.
          </p>
        </li>
        <li>
          <strong>Using a Line Chart for Unrelated Categories</strong>
          <p>
            Line charts imply sequence or continuity. If the x-axis contains unrelated categories, the visual can feel
            misleading.
          </p>
        </li>
        <li>
          <strong>Using Decorative or Unusual Charts Without a Clear Reason</strong>
          <p>
            More complex chart types may look creative, but if they slow down understanding, they weaken the story.
          </p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Choosing With Intention</h2>
      <p>
        Good chart selection comes from being intentional. Think about the question you are answering, the audience you
        are speaking to, and the insight you want them to remember.
      </p>
      <p>
        Instead of asking, “What chart can I make?” ask, “What chart makes this message easiest to understand?”
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Key Takeaways</h2>
      <ul class="sub-list">
        <li>Choose charts based on communication purpose, not personal preference</li>
        <li>Different goals call for different chart types</li>
        <li>The wrong chart can confuse or distort the message</li>
        <li>Simpler is often better</li>
        <li>The right chart makes the main idea easier to understand</li>
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