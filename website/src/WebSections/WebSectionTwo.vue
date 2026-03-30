<script setup>
// Logic for Web Section Two goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Web Frameworks & Libraries</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Don't reinvent the wheel unless you need a custom shape. Choose a library based
      on the balance between "ease of use" and "degree of creative control."
    </div>

    <div class="editorial-block">
      <p>
        The JavaScript ecosystem is overflowing with visualization libraries. Picking the right one depends entirely on
        your project's goals. Are you building a standard business dashboard or a custom, data-driven art piece?
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. High-Level Libraries (Easy & Fast)</h2>
      <p>
        These libraries offer "pre-packaged" charts. You give them data, tell them you want a "Bar Chart," and they
        handle the rest.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Chart.js:</strong> The most popular library for simple, clean, and responsive charts. It uses Canvas
          rendering and is perfect for standard dashboards.
        </li>
        <li>
          <strong>Plotly.js:</strong> Highly powerful and scientifically focused. It comes with built-in interactivity
          (zoom, pan, export) out of the box. Excellent for financial and statistical data.
        </li>
        <li>
          <strong>Pros:</strong> Very low learning curve; beautiful defaults.
        </li>
        <li>
          <strong>Cons:</strong> Difficult to customize beyond what the library creators intended.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Low-Level Libraries (Ultimate Control)</h2>
      <p>
        These don't give you charts; they give you the tools to <em>build</em> charts.
      </p>
      <ul class="concept-list">
        <li>
          <strong>D3.js (Data-Driven Documents):</strong> The industry standard for custom web visualization. D3 doesn't
          have a "bar chart" function; instead, you tell it to "create rectangles where the height is scaled to the
          data."
        </li>
        <li>
          <strong>Pros:</strong> Absolute freedom. If you can imagine it, you can build it in D3.
        </li>
        <li>
          <strong>Cons:</strong> Extremely steep learning curve. It requires a deep understanding of math, SVG, and DOM
          manipulation.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Declarative Languages</h2>
      <p>
        A middle ground where you describe the <em>mapping</em> of data to visuals.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Vega & Vega-Lite:</strong> These use a "Visualization Grammar." You write a JSON object that describes
          how data fields map to visual properties (like color or position). It is incredibly robust and powers many
          tools like Altair and Observable Plot.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Special Purpose Libraries</h2>
      <p>
        Sometimes 2D isn't enough.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Three.js:</strong> The go-to library for 3D visualizations. It uses WebGL to render complex shapes,
          perfect for geospatial data or interactive 3D models.
        </li>
        <li>
          <strong>Leaflet / Mapbox:</strong> Specialized libraries specifically for mapping and geographic data
          storytelling.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Keeping styles consistent with Section One */
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
