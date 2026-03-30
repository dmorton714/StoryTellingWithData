<script setup>
// Logic for Web Section One goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">The Power of Web Visualizations</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> The web transforms data from a static image into an active experience. On the
      web, the user is no longer a passive viewer; they are an explorer.
    </div>

    <div class="editorial-block">
      <p>
        Traditional data storytelling (like in print or PDFs) is linear. The author decides exactly what the reader
        sees. Web-based visualizations break this mold by allowing for <strong>nonlinear storytelling</strong>. The web
        provides a canvas where data can be filtered, zoomed, and animated in real-time.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Why the Web?</h2>
      <p>
        The web is the most accessible and powerful medium for data distribution in history.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Infinite Reach:</strong> Unlike a physical report, a web visualization can be shared instantly across
          the globe via a simple URL.
        </li>
        <li>
          <strong>Multi-Dimensionality:</strong> You can hide complexity behind interactions. A user can see a
          high-level trend, then hover to see the specific data points that created it. This maintains a clean design
          while offering deep analytical value.
        </li>
        <li>
          <strong>Real-Time Integration:</strong> Web charts can connect directly to APIs, ensuring the story being told
          is based on the data as it exists <em>right now</em>, not as it was when a report was printed.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The Modern Web Stack</h2>
      <p>
        Web visualizations are built on the "Holy Trinity" of web development:
      </p>
      <ul class="concept-list">
        <li>
          <strong>HTML (Structure):</strong> Provides the containers for your charts (like the <code>&lt;svg&gt;</code>
          or <code>&lt;canvas&gt;</code> elements).
        </li>
        <li>
          <strong>CSS (Style):</strong> Controls the look and feel, transitions, and responsive layout of your data
          story.
        </li>
        <li>
          <strong>JavaScript (Logic):</strong> The engine that drives the data. JS handles the calculations, the drawing
          of shapes, and the response to user clicks and hovers.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. SVG vs. Canvas</h2>
      <p>
        Choosing how the browser draws your data is a critical performance decision.
      </p>
      <ul class="concept-list">
        <li>
          <strong>SVG (Scalable Vector Graphics):</strong> Each data point is a distinct element in the browser's DOM.
          This is great for interactivity and styling with CSS, but it gets slow if you try to render more than a few
          thousand points.
        </li>
        <li>
          <strong>Canvas:</strong> A single bitmap element where pixels are drawn programmatically. It is incredibly
          fast and can handle hundreds of thousands of data points, but it is harder to style and less accessible out of
          the box.
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
