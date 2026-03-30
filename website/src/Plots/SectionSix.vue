<script setup>
// Logic for Section Six goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Avoiding Misleading Graphs</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> With great power comes great responsibility. Charts are highly persuasive tools, which means they can easily be used to lie. A great data storyteller builds trust through transparency.
    </div>

    <div class="editorial-block">
      <p>
        Most misleading graphs aren't created with malicious intent; they are the result of software defaults or a lack of design awareness. However, the human brain processes visual information instantly, meaning a bad chart can implant a false narrative before the viewer ever reads the underlying numbers.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Truncated Y-Axis</h2>
      <p>
        This is the most common visual lie in modern reporting. It happens when the bottom of a chart is cut off so it doesn't start at zero, making small differences look massive.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Bar Chart Rule:</strong> Bar charts <em>must always</em> start at zero. Because we judge the value of a bar by its physical length, a bar that represents "50" should be exactly half the length of a bar that represents "100".
        </li>
        <li>
          <strong>The Line Chart Exception:</strong> Line charts <em>can</em> have a truncated axis because they are meant to show the relative change or trend, not absolute volume. Just make sure the axis labels are highly visible so the viewer knows they are zoomed in.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Cherry-Picking Data (Timeframes)</h2>
      <p>
        You can make almost any metric look like a success or a failure simply by changing the start and end dates of your chart.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Trap:</strong> Showing that sales "skyrocketed 500%" by starting the chart in April (your worst month historically) and ending in December (your holiday peak).
        </li>
        <li>
          <strong>The Fix:</strong> Always provide historical context. If seasonality is a factor, show year-over-year comparisons. Let the data breathe enough to show the actual long-term reality.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Dual-Axis Dilemma</h2>
      <p>
        Plotting two different lines on the same chart, but giving each line its own distinct Y-axis scale (one on the left, one on the right).
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Trap:</strong> By manipulating the two scales independently, you can force two completely unrelated lines to cross or move together, artificially implying a strong correlation.
        </li>
        <li>
          <strong>The Fix:</strong> Avoid them whenever possible. It is almost always clearer to stack two separate, smaller charts on top of each other so the viewer can compare the trends without the scales getting tangled.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. 3D Graphics & Perspective</h2>
      <p>
        Adding a 3D tilt or shadow to a 2D chart might look like a neat PowerPoint trick, but it physically distorts the data.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Trap:</strong> In a 3D pie chart, the slice positioned at the "front" of the image appears significantly larger than a slice of the exact same size pushed to the "back" due to forced perspective.
        </li>
        <li>
          <strong>The Fix:</strong> Keep it flat. Data visualization is about translating numbers to pixels as accurately as possible. 3D effects add unnecessary "ink" that represents zero actual data.
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
