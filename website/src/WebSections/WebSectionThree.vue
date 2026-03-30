<script setup>
// Logic for Web Section Three goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Interactivity & UX</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Interactivity is a conversation between the user and the data. Good UX ensures
      that the user always knows how to ask a question and, more importantly, how to understand the answer.
    </div>

    <div class="editorial-block">
      <p>
        On the web, we have moved past static images. Interactivity allows us to present a clean, high-level story while
        giving curious users the tools to "peel back the layers." However, interactivity must be intuitive—if a user has
        to read a manual to use your chart, the design has failed.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Shneiderman’s Mantra</h2>
      <p>
        The gold standard for interactive visualization follows a specific sequence:
      </p>
      <ul class="concept-list">
        <li>
          <strong>Overview First:</strong> Show the big picture immediately. Let the user see the overall trend or shape
          of the data.
        </li>
        <li>
          <strong>Zoom and Filter:</strong> Provide controls to narrow down the data to specific areas of interest
          (e.g., a specific date range or category).
        </li>
        <li>
          <strong>Details-on-Demand:</strong> Use tooltips or side panels to show the exact values of a specific data
          point only when the user interacts with it.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Common Interaction Patterns</h2>
      <p>
        Consistency in how things move and react builds user confidence.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Hover States (Feed-forward):</strong> When a user moves their mouse over a data point, it should
          visually react (change color, grow slightly). This confirms that the element is "live" and interactive.
        </li>
        <li>
          <strong>Brushing & Linking:</strong> Selecting data in one chart (e.g., highlighting a region in a map) should
          automatically highlight the corresponding data in all other charts on the page.
        </li>
        <li>
          <strong>Panning & Zooming:</strong> Essential for geospatial maps or dense scatter plots. Always provide a
          "Reset Zoom" button so users don't get lost in the white space.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Visual Affordances</h2>
      <p>
        An "affordance" is a visual clue that tells a user how an object can be used.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Cursor:</strong> Change the mouse pointer to a "hand" (<code>cursor: pointer</code>) when hovering
          over clickable elements.
        </li>
        <li>
          <strong>Legends as Filters:</strong> A great UX pattern is making the chart legend interactive. Clicking
          "Region A" in the legend should toggle its visibility on the chart.
        </li>
        <li>
          <strong>Empty States:</strong> If a user filters the data so much that no results are left, don't show a blank
          screen. Show a friendly message: "No data matches these filters. Try resetting."
        </li>
      </ul>
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

.concept-list {
  list-style: none;
  padding-left: 0;
}

.concept-list>li {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.concept-list>li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.concept-list strong {
  font-size: 1.15rem;
  display: block;
  margin-bottom: 5px;
  color: var(--color-dark, #000);
}
</style>
