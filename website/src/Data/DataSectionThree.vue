<script setup>
// Logic for Data Section Three goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Cleaning Data</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Real-world data is inherently messy. The story you tell is only as reliable as the foundation it is built upon; cleaning is where you uncover the truth (or the errors) hidden in the raw numbers.
    </div>

    <div class="editorial-block">
      <p>
        There is a running joke in the industry that data professionals spend 80% of their time cleaning data and only 20% analyzing it. It isn't glamorous, but skipping this step guarantees a misleading visualization. Data cleaning is not just "janitor work"—it is the first phase of exploratory analysis.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. Handling Missing Values (Nulls)</h2>
      <p>
        Blank cells are inevitable. How you handle them can drastically alter your final metrics.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Deletion (Dropping Rows):</strong> The simplest method is to just delete any row with missing data. <em>Warning:</em> If you delete 30% of your dataset, or if the missing data comes predominantly from one specific demographic, you have just introduced massive bias.
        </li>
        <li>
          <strong>Imputation (Filling the Blanks):</strong> Replacing missing values with an educated guess, like the Median or Mean of that column. This preserves your row count but artificially reduces the natural variance in your data.
        </li>
        <li>
          <strong>Leaving Them Be:</strong> Sometimes, a missing value <em>is</em> the story. If a specific survey question has a 90% skip rate, the story isn't the data—it's that the question was confusing, overly personal, or broken.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Outliers and Anomalies</h2>
      <p>
        An outlier is a data point that differs significantly from other observations. The hardest part of cleaning is deciding what to do with them.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Is it an Error?</strong> If your dataset shows a customer who is 250 years old, or a resting heart rate of 0 BPM for a living patient, that is a data entry error. Those should be removed or corrected.
        </li>
        <li>
          <strong>Is it a True Anomaly?</strong> If you see a massive spike in server traffic on a random Tuesday, that isn't an error—that's a vital piece of information. Excluding valid outliers just to make your charts look "prettier" is a form of data manipulation.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Standardizing Formats</h2>
      <p>
        Computers take things literally. To a human, "USA", "U.S.A.", "United States", and "us" all mean the same thing. To a charting software, those are four completely different categories.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Categorical Cleanup:</strong> Consolidating text fields so they match perfectly. This often involves converting everything to lowercase, stripping out extra spaces, and fixing typos.
        </li>
        <li>
          <strong>Date Formatting:</strong> Dates are notoriously frustrating. "03/04/2024" means March 4th in the US, but April 3rd in Europe. Always convert your dates into a standard, unambiguous format (like ISO 8601: `YYYY-MM-DD`) before doing any time-series analysis.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The Golden Rule of Data Cleaning</h2>
      <p>
        Never, under any circumstances, overwrite your raw data file.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Maintain a Paper Trail:</strong> Always keep a pristine, untouched copy of the original dataset. Perform your cleaning in a duplicate file or, ideally, use a script (like Python/Pandas or SQL) that records exactly what changes you made. If you accidentally delete a crucial column and hit "Save" on the raw Excel file, you can never get it back.
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
