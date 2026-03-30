<script setup>
// Logic for Section Seven goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Color & Design Principles</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Every visual element on your chart either adds to the story or distracts from it. Use color and design strategically to guide your audience's eyes exactly where you want them to go.
    </div>

    <div class="editorial-block">
      <p>
        Design in data storytelling is not about making things look like art; it is about reducing cognitive load. When you apply color and layout thoughtfully, the viewer understands the main takeaway before they consciously realize they are reading a chart.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Strategic Use of Color</h2>
      <p>
        The biggest amateur mistake is making every bar or line a different, bright color. If everything is shouting, nothing is heard.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Highlight the Hero:</strong> Make the most important data point a bold, saturated color (like blue or orange) and push all the contextual or comparison data into muted grays.
        </li>
        <li>
          <strong>Sequential vs. Diverging:</strong> Use sequential palettes (light blue to dark blue) to show values going from low to high. Use diverging palettes (red to white to blue) only when there is a meaningful midpoint or zero you need to highlight (e.g., temperatures above and below freezing).
        </li>
        <li>
          <strong>Semantic Colors:</strong> Whenever possible, use colors that carry natural meaning. For example, revenue is generally green, while losses are red. Nature data might use greens and browns.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The Data-to-Ink Ratio</h2>
      <p>
        Coined by statistician Edward Tufte, this principle states that a large share of the "ink" used to print a chart should present actual data.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Eliminate Chartjunk:</strong> Strip away anything that does not help the viewer understand the numbers.
        </li>
        <li>
          <strong>What to Remove:</strong> Heavy backgrounds, dark gridlines, 3D effects, borders around bars, and redundant legends (if you only have one line, you don't need a legend telling you what that line is).
        </li>
        <li>
          <strong>Lighten the Rest:</strong> If you must keep gridlines or axes, make them light gray and thin so they sit in the background rather than competing with your data.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Establishing Visual Hierarchy</h2>
      <p>
        Visual hierarchy controls the order in which the human eye processes information on a page.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Top-Left to Bottom-Right:</strong> In most Western cultures, we read top-to-bottom, left-to-right. Place your most critical summary or title at the top left.
        </li>
        <li>
          <strong>Size and Weight:</strong> Use large, bold fonts for your primary takeaway and smaller, lighter fonts for axis labels and source citations.
        </li>
        <li>
          <strong>White Space:</strong> Don't be afraid of empty space. Giving your charts room to breathe makes them look more professional and less overwhelming to the reader.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Designing for Accessibility</h2>
      <p>
        A great design must be usable by everyone, including those with visual impairments.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Color Blindness:</strong> Avoid relying strictly on red-green combinations, which are difficult for many people to distinguish. Blue-orange is a much safer diverging palette.
        </li>
        <li>
          <strong>Contrast Ratios:</strong> Ensure there is high contrast between your text and the background. Light gray text on a white background might look sleek, but it is incredibly difficult to read.
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
