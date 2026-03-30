<script setup>
// Logic for Week One goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Data Storytelling Fundamentals</h1>

    <div class="editorial-block">
      <p class="lead-text">
        <strong>Welcome to Storytelling with Data!</strong> We designed this site to house all the content we will cover over the next six weeks, so you have it ready to go at your fingertips and can always reference back to it whenever you need.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">The Psychology of a Great Plot</h2>

      <div class="goal-callout">
        <strong>Goal:</strong> To move beyond "it looks nice" and understand the mechanics of communication.
      </div>

      <p>
        The best plots function like a "Visual Abstract." They shouldn't require the viewer to read a 10-page paper to understand the main takeaway. A good plot respects the viewer's <strong>Cognitive Load</strong>: the amount of mental effort being used to read and understand the plot.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">The Core Pillars</h2>

      <ul class="concept-list">
        <li>
          <strong>The 3-Second Rule:</strong> A viewer should identify the "Story" (the trend or the outlier) within three seconds. If they are still squinting at the legend after five seconds, the hierarchy is failing.
        </li>
        <li>
          <strong>Audience-Centric Design:</strong> Design with your audience in mind, be it children or a PhD-level viewer.
          <ul class="sub-list">
            <li><em>Executive Audience:</em> High-level, "So what?" insights, clear callouts. If they have to look too long, they won't care.</li>
            <li><em>Technical Audience:</em> High data density, statistical significance markers, raw data availability.</li>
          </ul>
        </li>
        <li>
          <strong>The Data-to-Ink Ratio:</strong> Coined by Edward Tufte, this principle suggests that every drop of "ink" on the page should represent data. If you have heavy gridlines, 3D effects, or decorative clip-art that doesn't represent a number, you are creating <em>Chartjunk</em>.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">The Essential Checklist</h2>

      <ul class="concept-list">
        <li>
          <strong>Strategic Color:</strong> Use color to "Highlight," not just "Decorate." If everything is colorful, nothing is important.
        </li>
        <li>
          <strong>Consistent Intervals:</strong> Jumping from 5-year increments to 10-year increments on an X-axis is a form of visual lying—it distorts the slope of the line.
        </li>
        <li>
          <strong>Active Titling:</strong> Instead of a passive title like <em>"Quarterly Revenue,"</em> use an active title like <em>"Revenue Surged 20% in Q3 due to New Subscriptions."</em>
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
  margin-bottom: 0.5em;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

/* INTRO TEXT */
.lead-text {
  font-size: 1.25rem;
  color: var(--color-muted, #555);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.lead-text strong {
  color: var(--color-dark, #222);
}

.editorial-block {
  margin-bottom: 2.5rem;
}

/* Mimics the parent's "section-title" but scaled for subsections */
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
  margin-bottom: 20px;
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

/* NESTED LISTS */
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
