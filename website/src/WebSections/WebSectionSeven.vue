<script setup>
// Logic for Web Section Seven: Accessibility & ARIA
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Accessibility & ARIA</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Interactive data is not truly "interactive" if it is only accessible via a mouse. Accessibility is about ensuring the story is perceivable, operable, and understandable by everyone—including those using screen readers.
    </div>

    <div class="editorial-block">
      <p>
        Most web charts are built using SVG (Scalable Vector Graphics). By default, an SVG is just a "bag of shapes" to a screen reader. Without proper ARIA (Accessible Rich Internet Applications) attributes, a blind user will hear nothing but "image" or a list of meaningless coordinates.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Accessible SVG Structure</h2>
      <p>
        Every data visualization should start with a clear text-based hierarchy before the shapes are even drawn.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Title and Description:</strong> Inside your <code>&lt;svg&gt;</code>, use <code>&lt;title&gt;</code> for a short name and <code>&lt;desc&gt;</code> for a summary of the data trends. Link them to the SVG using <code>aria-labelledby</code>.
        </li>
        <li>
          <strong>Role="graphics-document":</strong> Inform the browser that this SVG is an informative document, not just a decorative icon.
        </li>
      </ul>

      <div class="code-example">
        <pre><code>&lt;svg role="graphics-document" aria-labelledby="chart-title chart-desc"&gt;
  &lt;title id="chart-title"&gt;Annual Revenue 2024&lt;/title&gt;
  &lt;desc id="chart-desc"&gt;A bar chart showing a steady 15% increase in revenue over four quarters.&lt;/desc&gt;
  &lt;!-- Shapes go here --&gt;
&lt;/svg&gt;</code></pre>
      </div>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Keyboard Navigation (Tabbing)</h2>
      <p>
        If a user can "hover" to see a tooltip, a keyboard user must be able to "tab" to see that same information.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Tabindex="0":</strong> Adding this to your individual bars or dots makes them focusable.
        </li>
        <li>
          <strong>Focus Styles:</strong> Never remove the "outline" from a focused element (<code>:focus { outline: none; }</code>) unless you are replacing it with a high-contrast custom focus state. A keyboard user needs to know exactly where they are on the chart.
        </li>
        <li>
          <strong>Aria-live:</strong> If your chart updates dynamically (like a live stock ticker), use an <code>aria-live</code> region to announce the new data to screen readers.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Screen Reader Table Fallback</h2>
      <p>
        Sometimes, a complex visualization is too dense for ARIA to handle effectively. The most robust "best practice" is to provide a hidden data table.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Visually Hidden, Auditorially Present:</strong> Create a standard HTML <code>&lt;table&gt;</code> containing the raw data and use CSS to hide it visually while keeping it available to screen readers.
        </li>
        <li>
          <strong>Benefit:</strong> This allows users to navigate the data using familiar table commands (moving between rows and columns) which is often more intuitive than "tabbing" through 100 circles in a scatter plot.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Data Sonification (Advanced)</h2>
      <p>
        An emerging trend in accessibility is <strong>Sonification</strong>—turning data points into sound.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Mapping Pitch to Value:</strong> As a user tabs through a line chart, you can play tones where a higher pitch represents a higher data value. This allows users to "hear" the shape of a trend line.
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

/* CODE BLOCK STYLING */
.code-example {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  margin-top: 15px;
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
}

.code-example code {
  color: #ae81ff; /* Purple for attributes */
}
</style>
