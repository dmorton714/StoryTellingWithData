<script setup>
// Logic for Web Section Five: Performance & Optimization
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Performance & Optimization</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Every millisecond of delay is a moment where a user might bounce. In web
      visualization, performance isn't just about speed; it's about maintaining a "smooth" 60 frames-per-second
      experience for the user.
    </div>

    <div class="editorial-block">
      <p>
        Browsers are remarkably fast, but they have limits. When you ask a browser to calculate the position of 10,000
        dots and animate them simultaneously, you are competing for the "Main Thread"—the same thread that handles user
        clicks and scrolling. If the main thread hangs, your website "janks."
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Event Bottlenecks</h2>
      <p>
        Interaction events like <code>onMouseMove</code> or <code>onScroll</code> fire hundreds of times per second. If
        your chart tries to re-render on every single fire, the browser will choke.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Throttling:</strong> Guarantees that the chart only updates once every X milliseconds (e.g., 16ms for
          a smooth 60fps). This is best for "real-time" feeling interactions like sliders.
        </li>
        <li>
          <strong>Debouncing:</strong> Waits until the user <em>stops</em> interacting for a set period (e.g., 200ms)
          before re-rendering. This is best for heavy operations like fetching new data from an API after a user types
          in a search bar.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Strategic Data Thinning</h2>
      <p>
        A 1,000-pixel wide screen cannot physically display 1,000,000 distinct data points without them overlapping into
        a solid blob.
      </p>
      <ul class="concept-list">
        <li>
          <strong>LTTB (Largest-Triangle-Three-Buckets):</strong> A sophisticated downsampling algorithm that reduces
          the number of points while visually preserving the "peaks" and "troughs" of your data.
        </li>
        <li>
          <strong>Visual Aggregation:</strong> Instead of rendering every point, render a heatmap or a "hexbin" map.
          This tells the same story with significantly fewer DOM elements, saving the browser's memory.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The SVG vs. Canvas Threshold</h2>
      <p>
        The choice of technology is your biggest performance lever.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The 1,000-Element Rule:</strong> As a rule of thumb, use <strong>SVG</strong> for visualizations with
          fewer than 1,000 elements. SVGs are easier to style and more accessible.
        </li>
        <li>
          <strong>The Canvas Shift:</strong> For 1,000 to 50,000 elements, switch to <strong>HTML5 Canvas</strong>. It
          draws pixels directly to a buffer, bypassing the heavy overhead of the browser's DOM.
        </li>
        <li>
          <strong>The WebGL Tier:</strong> For datasets exceeding 100,000 points, move to <strong>WebGL</strong> (via
          libraries like Three.js or Deck.gl). This offloads the rendering work to the user's GPU (Graphics Card).
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Off-Main-Thread Processing</h2>
      <p>
        JavaScript is single-threaded. If you are running a complex statistical calculation (like a regression analysis)
        on a large dataset, the entire UI will freeze until it's done.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Web Workers:</strong> Use Web Workers to run heavy data processing in the background. The Worker does
          the "math," and when it's finished, it sends the final "coordinates" back to the main thread to be drawn. This
          keeps the user's interface snappy and responsive.
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
}

/* LISTS */
.concept-list {
  list-style: none;
  padding-left: 0;
}

.concept-list>li {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.concept-list>li:last-child {
  border-bottom: none;
}

.concept-list strong {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 8px;
  color: #000;
}
</style>
