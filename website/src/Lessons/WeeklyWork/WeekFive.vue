<script setup>
// Logic for Week Five goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Ethics, Bias, and Misleading Visuals</h1>

    <div class="goal-callout">
      <strong>In this section we will learn:</strong>
      <ul class="sub-list">
        <li>How visualizations can unintentionally or intentionally mislead.</li>
        <li>How bias can affect the story being told.</li>
        <li>Why ethical communication is part of good data storytelling.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Visualizations Can Mislead</h2>
      <p>
        Data visualizations are often seen as objective, but the way information is presented can strongly influence how
        it is interpreted. Even when the data itself is accurate, the visual can still be misleading.
      </p>
      <p>
        This is one reason data storytelling carries responsibility. A chart is not neutral simply because it contains
        numbers.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Common Ways Visuals Become Misleading</h2>
      <ul class="concept-list">
        <li>
          <strong>Truncated Axes</strong>
          <p>
            Starting an axis somewhere other than zero can exaggerate differences and make small changes appear much
            larger than they really are.
          </p>
        </li>
        <li>
          <strong>Inconsistent Scales</strong>
          <p>
            Changing intervals or using uneven scales can confuse the audience and distort comparisons.
          </p>
        </li>
        <li>
          <strong>Missing Context</strong>
          <p>
            A chart may be technically correct but still misleading if important context is omitted.
          </p>
        </li>
        <li>
          <strong>Selective Framing</strong>
          <p>
            Choosing only a small slice of the data can shape the story in a way that does not reflect the bigger
            picture.
          </p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Bias in Data and Storytelling</h2>
      <p>
        Bias does not only come from the final chart. It can appear much earlier in the process, including in how data
        is collected, what is measured, which groups are included, and what is left out.
      </p>
      <p>
        It can also appear in the interpretation. The story we choose to tell is shaped by our assumptions, values, and
        priorities.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Collection Bias</strong>
          <p>Some groups, behaviors, or experiences may be overrepresented or underrepresented in the data.</p>
        </li>
        <li>
          <strong>Selection Bias</strong>
          <p>Choosing only certain variables or examples can influence the story in subtle ways.</p>
        </li>
        <li>
          <strong>Interpretation Bias</strong>
          <p>Two people may look at the same data and frame the takeaway differently.</p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Ethical Responsibility</h2>
      <p>
        Ethical data storytelling means presenting information honestly, clearly, and with appropriate context. It means
        resisting the temptation to make a story look more dramatic than the evidence supports.
      </p>
      <p>
        Trust is a major part of communication. If an audience feels misled, even once, credibility becomes harder to
        rebuild.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Questions to Ask Yourself</h2>
      <ul class="concept-list">
        <li>
          <strong>Does this visual represent the data fairly?</strong>
        </li>
        <li>
          <strong>Am I leaving out context my audience needs?</strong>
        </li>
        <li>
          <strong>Could someone walk away with the wrong impression?</strong>
        </li>
        <li>
          <strong>Am I clarifying the message, or shaping it unfairly?</strong>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Key Takeaways</h2>
      <ul class="sub-list">
        <li>Visualizations can mislead even when the data is accurate</li>
        <li>Bias can enter the process in data collection, selection, or interpretation</li>
        <li>Context matters just as much as the chart itself</li>
        <li>Ethical storytelling requires honesty and care</li>
        <li>Trust is essential in data communication</li>
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