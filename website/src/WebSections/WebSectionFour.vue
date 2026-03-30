<script setup>
// Logic for Web Section Four: Responsive Design
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Responsive Design</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Responsive data visualization is not about shrinking; it is about **prioritizing**. On a small screen, you don't have room for context—you only have room for the "Aha!" moment.
    </div>

    <div class="editorial-block">
      <p>
        A desktop screen is a luxury of space. A mobile screen is a constraint. When we design responsively, we move from "Exploratory" views (where the user wanders) to "Explanatory" views (where we guide the user directly to the insight).
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Aspect Ratio Trap</h2>
      <p>
        Most charts are designed in landscape (16:9). Phones are held in portrait (9:16). If you simply scale a landscape chart down to fit a phone width, it becomes a tiny, unreadable sliver at the top of the screen.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Variable Aspect Ratios:</strong> Use JavaScript to check the screen width. If the width is under 600px, tell your chart to render with a 1:1 (square) or 4:5 aspect ratio instead of 16:9.
        </li>
        <li>
          <strong>The Resize Observer:</strong> Don't rely on the `window.resize` event, which is laggy. Use the `ResizeObserver` API to watch the specific container element and trigger a re-draw of your SVG scales whenever the container dimensions change.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Strategic Redaction</h2>
      <p>
        The best responsive design often involves deleting elements that are helpful on desktop but "noise" on mobile.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Axis Thinning:</strong> If your X-axis shows 12 months on desktop, show only 4 months (or just the years) on mobile. The brain can still infer the trend line without every tick mark.
        </li>
        <li>
          <strong>Hide the "Background" Data:</strong> On a scatter plot with 1,000 points, you might show all of them on desktop. On mobile, you might only render the 10 most important "outlier" points and represent the rest as a subtle shaded background area.
        </li>
        <li>
          <strong>Legend to Direct Labeling:</strong> Legends take up too much vertical space on mobile. Switch to direct labeling (placing text right next to the lines or bars) to save every precious pixel.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Designing for the Thumb</h2>
      <p>
        A mouse cursor is 1 pixel wide. A human thumb is roughly 40-80 pixels wide. Your interactivity must adapt.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Increase Hit Areas:</strong> Use "invisible" overlay shapes (larger than the actual data point) to capture touch events. A user shouldn't have to be a surgeon to tap on a specific dot in a scatter plot.
        </li>
        <li>
          <strong>The "Sticky" Tooltip:</strong> On desktop, tooltips follow the mouse. On mobile, use a "Click-to-Select" pattern where tapping a data point locks the tooltip in place at the top of the screen or in a dedicated "info" tray at the bottom.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The "Small-Multiple" Flip</h2>
      <p>
        Some charts simply don't work on mobile. A complex "Grouped Bar Chart" becomes a cluttered mess.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Small Multiples:</strong> Instead of one giant chart with 5 categories, flip the layout to 5 tiny, vertically-stacked charts. It is much easier for a mobile user to scroll through individual stories than to decode one overloaded visual.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* CONTAINER */
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
</style>
