<script setup>
// Logic for Web Section Six: Embedding & Scrollytelling
// In a real app, you might use an Intersection Observer here to trigger chart changes
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Embedding & Scrollytelling</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> A chart should not be an island. It should be woven into the text so that the narrative and the visual support one another. The goal is "Seamless Integration."
    </div>

    <div class="editorial-block">
      <p>
        The most common way to share a visualization is to "drop it in" to an existing page. However, there is a massive difference between a clunky iFrame and a sophisticated <strong>Scrollytelling</strong> interface.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Scrollytelling Pattern</h2>
      <p>
        Popularized by <em>The New York Times</em>, scrollytelling uses the user's scroll position to trigger transitions in a visualization. It ensures the user sees exactly what the text is describing at that moment.
      </p>

      <ul class="concept-list">
        <li>
          <strong>The "Sticky" Canvas:</strong> The visualization stays fixed (sticky) on the screen while the narrative text scrolls over or beside it.
        </li>
        <li>
          <strong>Scroll Triggering:</strong> Using libraries like <em>ScrollMagic</em>, <em>GSAP ScrollTrigger</em>, or the native <em>Intersection Observer API</em> to detect when a specific paragraph enters the viewport and tell the chart to update.
        </li>
        <li>
          <strong>Step-by-Step Revelation:</strong> Instead of showing a complex chart all at once, you use scrollytelling to highlight one data point at a time, reducing the cognitive load on the reader.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. iFrame vs. Inline Embedding</h2>
      <p>
        How you physically put the code on the page affects performance and styling.
      </p>

      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>iFrame</strong></td>
              <td>Isolated styles; easiest to drop into CMS like WordPress.</td>
              <td>Hard to make responsive; difficult to communicate between page and chart.</td>
            </tr>
            <tr>
              <td><strong>Inline (SVG/Canvas)</strong></td>
              <td>Total control; ultra-fast; easy to animate with page scroll.</td>
              <td>CSS from the main site can "leak" in and break chart styles.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The "Pym.js" Strategy</h2>
      <p>
        If you must use an iFrame (e.g., embedding an Observable notebook into a news site), you face the "Height Problem." The iFrame doesn't know how tall its content is.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Responsive Iframes:</strong> Use a library like <em>Pym.js</em> to create a communication bridge between the parent page and the child iFrame, automatically resizing the container so you never have double scrollbars.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Design Best Practices</h2>
      <ul class="concept-list">
        <li>
          <strong>Loading States:</strong> Interactive charts often have heavy JS bundles. Always provide a "Skeleton Screen" or a static image fallback so the page doesn't look broken while the library loads.
        </li>
        <li>
          <strong>Touch Protection:</strong> On mobile, big interactive maps can "trap" the user's scroll. Ensure there is enough padding around the embed so users can scroll past the chart without accidentally panning the data.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* LESSON STRUCTURE */
.lesson-content {
  max-width: 800px;
  color: #222;
  line-height: 1.7;
  font-size: 1.05rem;
  padding-bottom: 60px;
}

.lesson-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.8em;
  letter-spacing: -1px;
}

.editorial-block {
  margin-bottom: 3.5rem;
}

.subsection-title {
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid #222;
  padding-bottom: 12px;
  margin-bottom: 25px;
  font-weight: 700;
}

.goal-callout {
  background: #f9f9f9;
  border-left: 5px solid #222;
  padding: 25px;
  margin-bottom: 40px;
  font-size: 1.15rem;
  font-style: italic;
}

/* LISTS */
.concept-list {
  list-style: none;
  padding-left: 0;
}

.concept-list > li {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.concept-list > li:last-child {
  border-bottom: none;
}

.concept-list strong {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 8px;
  color: #000;
}

/* TABLE STYLING */
.comparison-table {
  margin-top: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  text-align: left;
}

th {
  background: #f4f4f4;
  padding: 12px;
  font-weight: 700;
  border: 1px solid #ddd;
}

td {
  padding: 12px;
  border: 1px solid #ddd;
  vertical-align: top;
}

.scrolly-container {
  display: flex;
  position: relative;
}

.scrolly-chart {
  position: sticky;
  top: 10vh;
  height: 80vh;
  width: 50%;
}

.scrolly-text {
  width: 50%;
  padding-left: 20px;
}
</style>
