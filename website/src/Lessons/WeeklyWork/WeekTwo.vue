<script setup>
// Logic for Week Two goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Exploring Datasets & Asking Better Questions</h1>

    <div class="goal-callout">
      <strong>In this section we will learn:</strong>
      <ul class="sub-list">
        <li>How to start with a <strong>clear question</strong>.</li>
        <li>How to choose the <strong>right data</strong> for that question.</li>
        <li>Why understanding your <strong>audience</strong> is essential.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Start With a Question</h2>
      <p>
        Strong data storytelling does not begin with a dataset. It begins with a <strong>question</strong>.
      </p>
      <p>
        A good question helps focus your analysis, determine what data matters, and shape the story you will tell.
        Without a clear question, it becomes much easier to create a chart that is technically correct but not
        especially useful or meaningful.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Weak Questions</strong>
          <p>Weak questions are too broad or too vague. They do not lead to a clear insight.</p>
          <ul class="sub-list">
            <li>“What does this dataset show?”</li>
            <li>“Can I make a chart from this?”</li>
          </ul>
        </li>
        <li>
          <strong>Stronger Questions</strong>
          <p>Strong questions are focused and help guide the audience toward a meaningful takeaway.</p>
          <ul class="sub-list">
            <li>“Which group is most affected?”</li>
            <li>“What trend is changing over time?”</li>
            <li>“Where should action be taken?”</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Choosing the Right Data</h2>
      <p>
        Not all data is useful for every question. In fact, including too much information can make a visualization
        harder to understand.
      </p>
      <p>
        A strong data storyteller chooses data intentionally. The goal is not to include everything available. The
        goal is to include the information that best helps answer the question at hand.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Relevant Data</strong>
          <p>Relevant data directly supports the question you are trying to answer and helps clarify the insight.</p>
        </li>
        <li>
          <strong>Irrelevant Data</strong>
          <p>Irrelevant data adds noise, distracts the audience, and makes the story harder to follow.</p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Know Your Audience</h2>
      <p>
        Your audience plays a major role in shaping how your data should be presented. The same information may need to
        be framed very differently depending on who is viewing it.
      </p>
      <p>
        A general audience may need a simpler, more direct explanation. A technical audience may want more detail,
        nuance, or context. Designing for your audience means thinking about what they care about, what they already
        know, and what they need to understand quickly.
      </p>

      <ul class="concept-list">
        <li>
          <strong>General Audience</strong>
          <ul class="sub-list">
            <li>Needs simplicity and clarity</li>
            <li>Benefits from minimal jargon</li>
            <li>Needs the takeaway to be obvious</li>
          </ul>
        </li>
        <li>
          <strong>Technical Audience</strong>
          <ul class="sub-list">
            <li>Can usually handle more detail</li>
            <li>May expect deeper context or explanation</li>
            <li>May want to see more of the underlying complexity</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Understanding Data Types</h2>
      <p>
        Once you know your question and audience, the next step is understanding the <strong>type of data</strong> you
        are working with. This matters because different types of data are best represented with different kinds of
        visualizations.
      </p>
      <p>At a high level, data usually falls into <strong>two main categories</strong>:</p>

      <ul class="concept-list">
        <li>
          <strong>Categorical</strong>
          <ul class="sub-list">
            <li>Nominal</li>
            <li>Ordinal</li>
          </ul>
        </li>
        <li>
          <strong>Numerical</strong>
          <ul class="sub-list">
            <li>Discrete</li>
            <li>Continuous</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Categorical Data</h2>
      <p>
        Categorical data represents <strong>labels, groups, or categories</strong> rather than measured quantities.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Nominal Data</strong>
          <p>
            Represents categories that <strong>do not have a natural order</strong>. These are simply different labels
            or groups.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Occupation, country, product category, department</li>
            <li><em>Best Visualized With:</em> Bar charts, count plots</li>
          </ul>
        </li>
        <li>
          <strong>Ordinal Data</strong>
          <p>
            Represents categories that <strong>do have a meaningful order</strong>, even if the distance between the
            values is not equal.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Satisfaction rating, risk level, education level</li>
            <li><em>Best Visualized With:</em> Ordered bar charts, box plots when appropriate</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Numerical Data</h2>
      <p>
        Numerical data represents <strong>quantitative values</strong> that can be measured or counted.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Discrete Data</strong>
          <p>
            Represents <strong>countable numbers</strong>, often whole numbers.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Number of customers, number of errors, items sold</li>
            <li><em>Best Visualized With:</em> Bar charts, histograms</li>
          </ul>
        </li>
        <li>
          <strong>Continuous Data</strong>
          <p>
            Represents <strong>measured values that can fall anywhere within a range</strong>, including decimals.
          </p>
          <ul class="sub-list">
            <li><em>Examples:</em> Temperature, income, height, response time</li>
            <li><em>Best Visualized With:</em> Histograms, line charts, scatter plots, box plots</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Connecting the Pieces</h2>
      <p>
        Effective data storytelling follows a clear structure. Each step builds on the one before it.
      </p>

      <ul class="concept-list">
        <li>
          <strong>Question → Data → Audience → Visualization → Insight</strong>
          <p>
            If any one of these is unclear, the final story becomes weaker. Strong visuals are not just about choosing a
            chart. They are about choosing the right chart for the right data, in service of the right message.
          </p>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Key Takeaways</h2>
      <ul class="sub-list">
        <li>Start with a clear question</li>
        <li>Use only the data that supports that question</li>
        <li>Design for your audience, not yourself</li>
        <li>Understanding data types helps you choose better charts</li>
        <li>Clarity is more important than complexity</li>
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