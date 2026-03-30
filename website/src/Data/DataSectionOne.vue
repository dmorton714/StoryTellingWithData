<script setup>
// Logic for Data Section One goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Ethics in Data</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Data points represent real people, real lives, and real consequences. Just because you <em>can</em> collect, analyze, or visualize certain data does not mean you <em>should</em>.
    </div>

    <div class="editorial-block">
      <p>
        Data is often viewed as cold, hard, objective math. But behind every dataset is a series of human decisions: what to measure, how to measure it, and who gets included. As a data storyteller, you hold immense power to shape narratives and influence decisions. With that power comes a strict ethical responsibility.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Privacy & Consent</h2>
      <p>
        Respecting the people behind the numbers is the foundation of data ethics.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Personally Identifiable Information (PII):</strong> Never expose data that could be used to identify a specific individual (names, addresses, SSNs, highly specific location data) unless absolutely necessary and legally permitted.
        </li>
        <li>
          <strong>The Anonymization Myth:</strong> Simply removing someone's name from a dataset does not make them anonymous. If you have their zip code, gender, and date of birth, it is often incredibly easy to identify them by cross-referencing other public records. Always aggregate sensitive data to protect identities.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Bias in Data Collection</h2>
      <p>
        A dataset is a mirror of the system that collected it. If the collection process is flawed, the resulting analysis will be flawed—no matter how fancy the math is.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Historical Bias:</strong> If an algorithm is trained on past hiring data, and a company historically only hired men for leadership roles, the algorithm will "learn" that men are better leaders and automatically filter out women.
        </li>
        <li>
          <strong>Survivorship Bias:</strong> Focusing only on the people or things that "survived" a process, while ignoring those that failed. (e.g., Looking at the habits of successful billionaires, while ignoring the thousands of people with those exact same habits who went bankrupt).
        </li>
        <li>
          <strong>Sampling Bias:</strong> If you run a Twitter poll to find out what "the average person" thinks, you are only measuring what "people on Twitter who follow you" think.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. The Danger of Metrics</h2>
      <p>
        How you choose to measure success can inadvertently encourage unethical behavior.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Goodhart's Law:</strong> <em>"When a measure becomes a target, it ceases to be a good measure."</em>
        </li>
        <li>
          <strong>The Real-World Impact:</strong> If a hospital judges its surgeons purely by their "survival rate," the surgeons might refuse to operate on the sickest patients to protect their stats. Always ask: <em>"How could this metric be gamified or abused?"</em>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. Transparency & Accountability</h2>
      <p>
        Ethical data storytellers do not hide their methodology. They show their work.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Document Your Assumptions:</strong> Did you drop 5% of the rows because the data was missing? Did you define "active user" as someone who logged in once a month? Tell your audience. If you change the rules mid-analysis, state it plainly.
        </li>
        <li>
          <strong>Acknowledge Limitations:</strong> No dataset is perfect. An ethical presentation ends with a clear explanation of what the data <em>cannot</em> tell you.
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
