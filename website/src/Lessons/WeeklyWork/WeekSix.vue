<script setup>
// Logic for Week Six goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Narrative, Annotation, and Communicating Insights</h1>

    <div class="goal-callout">
      <strong>In this section we will learn:</strong>
      <ul class="sub-list">
        <li>How to turn charts into a complete story.</li>
        <li>How to guide the audience using annotation and framing.</li>
        <li>How to communicate insights clearly and intentionally.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">A Chart Is Not Automatically a Story</h2>
      <p>
        A single chart can present information, but that does not always mean it tells a story. A story requires
        structure, direction, and a clear sense of why the audience should care.
      </p>
      <p>
        Good data storytelling helps people move from information to understanding. It creates a path through the data
        instead of leaving the audience to interpret everything on their own.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Building a Narrative</h2>
      <p>
        One helpful way to think about storytelling is in terms of a beginning, middle, and end. This does not mean the
        story must be dramatic. It means the audience needs context, evidence, and a takeaway.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Beginning</strong>
          <p>Introduce the context, problem, or question.</p>
        </li>
        <li>
          <strong>Middle</strong>
          <p>Present the evidence through charts, comparisons, or patterns.</p>
        </li>
        <li>
          <strong>End</strong>
          <p>Deliver the main insight, conclusion, or implication.</p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">The Role of Annotation</h2>
      <p>
        Annotation helps guide the audience toward what matters most. Instead of forcing viewers to figure out the key
        takeaway on their own, annotations can make the meaning clearer and more immediate.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Labels</strong>
          <p>Directly naming important values or categories can reduce confusion.</p>
        </li>
        <li>
          <strong>Callouts</strong>
          <p>Short notes can emphasize the most important point in the visualization.</p>
        </li>
        <li>
          <strong>Titles With a Takeaway</strong>
          <p>
            A strong title does more than label the chart. It communicates the main point the audience should notice.
          </p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Connecting Multiple Visuals</h2>
      <p>
        When a story uses more than one chart, those visuals should work together rather than feel disconnected. Each
        chart should add something new, deepen understanding, or move the audience one step further.
      </p>
      <p>
        Good sequencing matters. If the charts appear in a confusing order, the story becomes harder to follow even if
        each individual visualization is well designed.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Communicating Insights Clearly</h2>
      <p>
        The goal of data storytelling is not simply to display information. It is to help the audience understand what
        the information means.
      </p>
      <p>
        A clear insight answers a question, highlights what is important, and gives the audience a reason to remember
        the message.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Be Direct</strong>
          <p>Do not make the audience work harder than necessary to find the takeaway.</p>
        </li>
        <li>
          <strong>Be Focused</strong>
          <p>A strong story usually centers on one main message rather than many competing ideas.</p>
        </li>
        <li>
          <strong>Be Intentional</strong>
          <p>Every chart, annotation, and design choice should support the same overall purpose.</p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Key Takeaways</h2>
      <ul class="sub-list">
        <li>A chart alone is not automatically a story</li>
        <li>Stories need structure, context, and a clear takeaway</li>
        <li>Annotations help guide attention and understanding</li>
        <li>Multiple visuals should work together in a meaningful sequence</li>
        <li>Clear communication is the goal of every data story</li>
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