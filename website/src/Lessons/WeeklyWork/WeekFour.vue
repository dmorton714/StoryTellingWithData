<script setup>
// Logic for Week Four goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Design, Color, and Visual Hierarchy</h1>

    <div class="goal-callout">
      <strong>In this section we will learn:</strong>
      <ul class="sub-list">
        <li>How design influences what people notice first.</li>
        <li>How to use color intentionally instead of decoratively.</li>
        <li>How to reduce clutter and improve clarity.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Design Is Part of the Message</h2>
      <p>
        In data storytelling, design is not just decoration. Design choices shape how your audience reads the
        visualization, where their eye goes first, and what they understand as most important.
      </p>
      <p>
        A strong design helps people focus on the message quickly. A weak design can make even good data feel confusing,
        overwhelming, or forgettable.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Visual Hierarchy</h2>
      <p>
        Visual hierarchy refers to the order in which your audience notices information. Some elements stand out more
        than others, and that is not accidental. Good designers make deliberate choices about what should receive the
        most attention.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Size</strong>
          <p>Larger elements tend to attract attention first.</p>
        </li>
        <li>
          <strong>Color</strong>
          <p>Contrast and emphasis can make important information stand out.</p>
        </li>
        <li>
          <strong>Placement</strong>
          <p>Items placed prominently or early in the layout are more likely to be noticed.</p>
        </li>
        <li>
          <strong>Spacing</strong>
          <p>White space can separate ideas and make the overall structure easier to understand.</p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Using Color With Intention</h2>
      <p>
        Color can be one of the most powerful tools in a visualization, but only when it is used thoughtfully. Too many
        colors, or colors without a clear purpose, can distract from the message instead of supporting it.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Highlight What Matters</strong>
          <p>Use color to draw attention to the most important value, category, or trend.</p>
        </li>
        <li>
          <strong>Group Related Information</strong>
          <p>Consistent use of color can help indicate that multiple elements belong together.</p>
        </li>
        <li>
          <strong>Avoid Decorative Color Choices</strong>
          <p>If a color does not help communicate meaning, it may be adding noise rather than value.</p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Accessibility and Readability</h2>
      <p>
        Good design should be readable for as many people as possible. This includes thinking about contrast, legibility,
        and the fact that not everyone sees color in the same way.
      </p>
      <p>
        Accessible design is not just a technical requirement. It is part of making sure your audience can actually
        understand your message.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Use Sufficient Contrast</strong>
          <p>Low contrast between text, labels, and backgrounds can make the visualization hard to read.</p>
        </li>
        <li>
          <strong>Do Not Rely on Color Alone</strong>
          <p>Labels, patterns, or annotations may still be needed to make meaning clear.</p>
        </li>
        <li>
          <strong>Keep Text Readable</strong>
          <p>Font size, spacing, and clarity all affect how quickly an audience can understand the content.</p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Reduce Clutter</h2>
      <p>
        One of the easiest ways to strengthen a visualization is to remove what does not help. Extra labels, heavy
        gridlines, unnecessary icons, and decorative design elements can all compete with the real message.
      </p>
      <p>
        This does not mean every visualization should feel plain. It means every element should have a purpose.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Key Takeaways</h2>
      <ul class="sub-list">
        <li>Design affects how your audience understands the message</li>
        <li>Visual hierarchy helps determine what people notice first</li>
        <li>Use color intentionally to emphasize meaning</li>
        <li>Accessibility improves clarity for all viewers</li>
        <li>Removing clutter often makes a visualization stronger</li>
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