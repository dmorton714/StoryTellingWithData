<script setup>
// Logic for Data Section Six goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Communicating Insights</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Your analysis is only as valuable as your ability to explain it. Data does not speak for itself; it needs a translator to give it a voice and a purpose.
    </div>

    <div class="editorial-block">
      <p>
        You have successfully sourced, cleaned, and explored your data. You have checked your biases and found a genuinely interesting trend. Now comes the hardest part: getting someone else to care. Communicating insights is the bridge between a spreadsheet of numbers and a real-world decision.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Answering the "So What?"</h2>
      <p>
        Executives and stakeholders do not care how hard you worked to clean the data. They care about what the data means for their goals.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Trivia vs. Insight:</strong> "Sales are down 10% in the Midwest" is a fact (trivia). "Sales are down 10% in the Midwest <em>because</em> our new competitor undercut our pricing, meaning we need to run a localized discount campaign" is an insight.
        </li>
        <li>
          <strong>Lead with the Conclusion:</strong> In academia, you build your case slowly and reveal the conclusion at the end. In business and data storytelling, you do the exact opposite. Give them the answer on slide one, then use the rest of the presentation to prove why you are right.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. The Three-Act Structure</h2>
      <p>
        Good data stories follow the same narrative arcs as good movies. You need a beginning, a middle, and an end.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Act I: The Setup (Context):</strong> Establish the baseline. What is the current state of the business or the world? (e.g., "We aimed to acquire 5,000 new users this quarter.")
        </li>
        <li>
          <strong>Act II: The Conflict (The Hook):</strong> Introduce the friction or the unexpected discovery found in the data. (e.g., "However, our data shows a massive drop-off at the payment screen, costing us 2,000 potential users.")
        </li>
        <li>
          <strong>Act III: The Resolution (The Ask):</strong> Deliver the actionable recommendation based on the data. (e.g., "By redesigning the checkout flow to remove three form fields, we project recovering $50k in lost revenue.")
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Curse of Knowledge</h2>
      <p>
        When you spend 40 hours staring at a dataset, you forget what it is like to <em>not</em> understand it.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Kill the Jargon:</strong> Do not use terms like "heteroskedasticity" or "p-value" with a non-technical audience. If you cannot explain your finding using plain, conversational language, you do not understand it well enough yourself.
        </li>
        <li>
          <strong>Simplify the Visuals:</strong> The complex, 12-variable scatter plot you used during your Exploratory Data Analysis (EDA) belongs in an appendix, not on the main stage. Redraw the chart to highlight <em>only</em> the specific trend you are talking about.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Matching the Medium</h2>
      <p>
        How you deliver the data changes how you must design it.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Live Presentations:</strong> If you are speaking to the slides, keep text to an absolute minimum. The audience should be listening to your voice, not reading a paragraph on a screen.
        </li>
        <li>
          <strong>Emailed Reports/Dashboards:</strong> If the chart is being sent in an email or a PDF where you cannot verbally explain it, you must heavily annotate it. Add text boxes, clear definitions, and written takeaways right onto the page so it survives without you.
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
