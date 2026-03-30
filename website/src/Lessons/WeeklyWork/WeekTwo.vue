<script setup>
// Logic for Week Two goes here
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Exploring Datasets & Asking Better Questions</h1>

    <div class="goal-callout">
      <strong>In this section we will learn:</strong>
      <ul class="sub-list">
        <li>What different <strong>types of data</strong> are.</li>
        <li>Why data types matter for visualization.</li>
        <li>How to choose the <strong>right chart</strong> for the question you want to answer.</li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Understanding Data Types</h2>
      <p>
        Before choosing a chart, we must first understand the <strong>type of data</strong> we are working with. The
        type of data determines which visualizations will communicate information most clearly.
      </p>
      <p>At the highest level, data falls into <strong>two main categories</strong>:</p>

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
      <p>Categorical data represents <strong>labels, groups, or categories</strong> rather than numeric measurements. It
        can be divided into two subtypes:</p>

      <ul class="concept-list">
        <li>
          <strong>Nominal Data</strong>
          <p>Represents categories that <strong>do not have a natural order</strong>. There is no ranking between these
            categories (e.g., you cannot say Morning > Evening).</p>
          <ul class="sub-list">
            <li><em>Examples:</em> Gender (Male, Female), Occupation (Engineer, Teacher), Country (USA, UK), Chronotype
              (Morning, Evening).</li>
            <li><em>Best Visualized With:</em> Bar charts, count plots.</li>
          </ul>
        </li>
        <li>
          <strong>Ordinal Data</strong>
          <p>Represents categories that <strong>do have a meaningful order or ranking</strong>. The categories have a
            logical progression, but the distance between them is not necessarily equal (e.g., the difference between a
            sleep score of 6 and 7 may not be the same as 8 and 9).</p>
          <ul class="sub-list">
            <li><em>Examples:</em> Sleep disorder risk (Low &lt; Medium &lt; High), Sleep quality score.</li>
            <li><em>Best Visualized With:</em> Bar charts, box plots (when treated numerically).</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Numerical Data</h2>
      <p>Numerical data represents <strong>quantitative values</strong> that can be measured or counted. It can be
        divided into two subtypes:</p>

      <ul class="concept-list">
        <li>
          <strong>Discrete Data</strong>
          <p>Represents <strong>countable numbers</strong>, usually whole numbers. These values typically cannot be
            fractional in a meaningful way (e.g., you can wake up 3 times, but not 3.7 times).</p>
          <ul class="sub-list">
            <li><em>Examples:</em> Wake episodes per night, steps that day, resting heart rate (BPM).</li>
            <li><em>Best Visualized With:</em> Bar charts, histograms.</li>
          </ul>
        </li>
        <li>
          <strong>Continuous Data</strong>
          <p>Represents <strong>measured values that can take any value within a range</strong>, including decimals or
            fractions.</p>
          <ul class="sub-list">
            <li><em>Examples:</em> Sleep duration (6.5 hours), BMI (24.7), Room temperature (18.3°C).</li>
            <li><em>Best Visualized With:</em> Histograms, line charts, scatter plots, box plots.</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Connecting This to A Dataset</h2>
      <p>
        Now that we understand the different types of data, we can apply this framework directly to our dataset. The
        <strong>Sleep Health and Lifestyle Dataset</strong> contains 100,000 observations of individuals and their sleep
        patterns, behaviors, and health-related factors.
      </p>

      <div class="table-container">
        <table class="data-dictionary">
          <thead>
            <tr>
              <th>Column Name</th>
              <th>Data Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>person_id</strong></td>
              <td>Categorical (Nominal)</td>
              <td>Unique identifier. Stored as an int, but not meaningful for math.</td>
            </tr>
            <tr>
              <td><strong>age</strong></td>
              <td>Numerical (Discrete)</td>
              <td>Age in years, recorded as whole numbers.</td>
            </tr>
            <tr>
              <td><strong>gender</strong></td>
              <td>Categorical (Nominal)</td>
              <td>Gender of the individual.</td>
            </tr>
            <tr>
              <td><strong>occupation</strong></td>
              <td>Categorical (Nominal)</td>
              <td>Job or profession.</td>
            </tr>
            <tr>
              <td><strong>bmi</strong></td>
              <td>Numerical (Continuous)</td>
              <td>Body Mass Index.</td>
            </tr>
            <tr>
              <td><strong>country</strong></td>
              <td>Categorical (Nominal)</td>
              <td>Country of residence.</td>
            </tr>
            <tr>
              <td><strong>sleep_duration_hrs</strong></td>
              <td>Numerical (Continuous)</td>
              <td>Total hours slept.</td>
            </tr>
            <tr>
              <td><strong>sleep_quality_score</strong></td>
              <td>Numerical (Ordinal)</td>
              <td>A ranked score representing sleep quality.</td>
            </tr>
            <tr>
              <td><strong>rem_percentage</strong></td>
              <td>Numerical (Continuous)</td>
              <td>Percentage of sleep spent in REM stage.</td>
            </tr>
            <tr>
              <td><strong>deep_sleep_percentage</strong></td>
              <td>Numerical (Continuous)</td>
              <td>Percentage of sleep spent in deep sleep.</td>
            </tr>
            <tr>
              <td><strong>sleep_latency_mins</strong></td>
              <td>Numerical (Discrete)</td>
              <td>Minutes taken to fall asleep.</td>
            </tr>
            <tr>
              <td><strong>wake_episodes_per_night</strong></td>
              <td>Numerical (Discrete)</td>
              <td>Number of times the individual wakes up.</td>
            </tr>
            <tr>
              <td><strong>caffeine_mg_before_bed</strong></td>
              <td>Numerical (Discrete)</td>
              <td>Caffeine consumed before bed (mg).</td>
            </tr>
            <tr>
              <td><strong>alcohol_units_before_bed</strong></td>
              <td>Numerical (Continuous)</td>
              <td>Alcohol consumption before bed.</td>
            </tr>
            <tr>
              <td><strong>screen_time_before_bed_mins</strong></td>
              <td>Numerical (Discrete)</td>
              <td>Minutes of screen time before sleep.</td>
            </tr>
            <tr>
              <td><strong>exercise_day</strong></td>
              <td>Numerical (Binary)</td>
              <td>Did they exercise? (0 = No, 1 = Yes).</td>
            </tr>
            <tr>
              <td><strong>steps_that_day</strong></td>
              <td>Numerical (Discrete)</td>
              <td>Total steps taken.</td>
            </tr>
            <tr>
              <td><strong>nap_duration_mins</strong></td>
              <td>Numerical (Discrete)</td>
              <td>Length of naps in minutes.</td>
            </tr>
            <tr>
              <td><strong>stress_score</strong></td>
              <td>Numerical (Ordinal)</td>
              <td>A stress rating scale.</td>
            </tr>
            <tr>
              <td><strong>work_hours_that_day</strong></td>
              <td>Numerical (Continuous)</td>
              <td>Total hours worked.</td>
            </tr>
            <tr>
              <td><strong>chronotype</strong></td>
              <td>Categorical (Nominal)</td>
              <td>Sleep preference (Morning person, night owl).</td>
            </tr>
            <tr>
              <td><strong>mental_health_condition</strong></td>
              <td>Categorical (Nominal)</td>
              <td>Reported mental health condition.</td>
            </tr>
            <tr>
              <td><strong>heart_rate_resting_bpm</strong></td>
              <td>Numerical (Discrete)</td>
              <td>Resting heart rate in beats per minute.</td>
            </tr>
            <tr>
              <td><strong>sleep_aid_used</strong></td>
              <td>Numerical (Binary)</td>
              <td>Were sleep aids used? (0 = No, 1 = Yes).</td>
            </tr>
            <tr>
              <td><strong>shift_work</strong></td>
              <td>Numerical (Binary)</td>
              <td>Does the individual work shifts? (0 = No, 1 = Yes).</td>
            </tr>
            <tr>
              <td><strong>room_temperature_celsius</strong></td>
              <td>Numerical (Continuous)</td>
              <td>Room temperature during sleep.</td>
            </tr>
            <tr>
              <td><strong>weekend_sleep_diff_hrs</strong></td>
              <td>Numerical (Continuous)</td>
              <td>Difference in sleep duration (weekday vs weekend).</td>
            </tr>
            <tr>
              <td><strong>season</strong></td>
              <td>Categorical (Nominal)</td>
              <td>Season during which data was recorded.</td>
            </tr>
            <tr>
              <td><strong>day_type</strong></td>
              <td>Categorical (Nominal)</td>
              <td>Weekday vs weekend.</td>
            </tr>
            <tr>
              <td><strong>cognitive_performance_score</strong></td>
              <td>Numerical (Continuous)</td>
              <td>A performance metric derived from cognitive tests.</td>
            </tr>
            <tr>
              <td><strong>sleep_disorder_risk</strong></td>
              <td>Categorical (Ordinal)</td>
              <td>Risk category for sleep disorders (e.g., Low, Med, High).</td>
            </tr>
            <tr>
              <td><strong>felt_rested</strong></td>
              <td>Numerical (Binary)</td>
              <td>Did the individual feel rested? (0 = No, 1 = Yes).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">Summary: Matching Data Types to Charts</h2>
      <p>
        Understanding whether your data represents unordered groups (Nominal), ranked categories (Ordinal), countable
        whole numbers (Discrete), or measurable ranges (Continuous) is the essential first step in data storytelling.
      </p>
      <p>Knowing the data type allows you to select the correct visual encoding strategy:</p>

      <ul class="concept-list">
        <li>
          <strong>If the Data is Categorical (Nominal/Ordinal):</strong>
          <p>The goal is usually to **compare counts or proportions** across different groups.</p>
          <ul class="sub-list">
            <li><em>Primary Charts:</em> Bar charts, stacked bar charts, treemaps, (sometimes pie charts).</li>
          </ul>
        </li>
        <li>
          <strong>If the Data is Numerical (Discrete/Continuous):</strong>
          <p>The goal is usually to <strong>analyze distributions, trends over time, or relationships</strong> between variables.</p>
          <ul class="sub-list">
            <li><em>Primary Charts:</em> Histograms, box plots (for distributions); Line charts (for trends); Scatter
              plots (for relationships).</li>
          </ul>
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

.concept-list>li {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.concept-list>li:last-child {
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

/* DATA DICTIONARY TABLE */
.table-container {
  overflow-x: auto;
  margin-top: 20px;
}

.data-dictionary {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  text-align: left;
}

.data-dictionary th {
  background: rgba(0, 0, 0, 0.04);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 12px 15px;
  border-bottom: 2px solid var(--color-dark, #222);
}

.data-dictionary td {
  padding: 12px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  vertical-align: top;
}

.data-dictionary tr:hover td {
  background: rgba(0, 0, 0, 0.02);
}
</style>
