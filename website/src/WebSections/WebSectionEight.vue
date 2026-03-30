<script setup>
// Logic for Web Section Eight: Best Practices & Pitfalls
</script>

<template>
  <div class="lesson-content">
    <h1 class="lesson-title">Best Practices & Pitfalls</h1>

    <div class="goal-callout">
      <strong>Core Principle:</strong> Interaction should be a delight, not a chore. If a user feels like they are fighting your interface to see the data, you have prioritized "cool" over "clear."
    </div>

    <div class="editorial-block">
      <p>
        The web gives you the freedom to do almost anything, which makes it incredibly easy to over-design. Professional web visualization is defined as much by what you <em>don't</em> do as by what you do.
      </p>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">1. The Animation Tax</h2>
      <p>
        Animation should only be used to show <strong>Object Constancy</strong>—helping the eye follow a data point as it changes from one state to another.
      </p>

      <ul class="concept-list">
        <li>
          <strong>The 300ms Rule:</strong> Transitions should rarely last longer than 300-400ms. Anything slower feels "laggy" and makes the user wait for the data to arrive.
        </li>
        <li>
          <strong>Staggered Entries:</strong> When loading a bar chart, don't animate 50 bars at the exact same time. Stagger them slightly (5-10ms delay between each) to create a sophisticated "wave" effect that guides the eye.
        </li>
        <li>
          <strong>The Pitfall:</strong> Avoid "Entrance Animations" that serve no purpose other than flair. If a chart bounces or spins just to appear on the screen, it’s distracting "chartjunk."
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">2. Avoiding Scroll-Jacking</h2>
      <p>
        Scroll-jacking is when a website takes control of the user's scroll speed or direction. It is the #1 way to frustrate a web user.
      </p>
      <ul class="concept-list">
        <li>
          <strong>Respect the Physics:</strong> Let the browser handle the scroll momentum. If you are building a scrollytelling piece, the text should move at the user's natural pace. The visualization should react to the scroll, not dictate it.
        </li>
        <li>
          <strong>The "Trap" Map:</strong> If you have a large interactive map, disable "scroll-to-zoom" by default. Users often get stuck inside the map boundaries while trying to scroll down the page. Require a "Ctrl + Scroll" or a specific button to zoom.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">3. Tooltip Discipline</h2>
      <p>
        Tooltips are for secondary information. If the most important data point is hidden inside a tooltip, 90% of your users will never see it.
      </p>
      <ul class="concept-list">
        <li>
          <strong>The Mobile Conflict:</strong> "Hover" doesn't exist on smartphones. If your desktop chart relies on hover-tooltips, ensure your mobile version uses "Tap-to-Select" or displays the data directly on the screen.
        </li>
      </ul>
    </div>

    <div class="editorial-block">
      <h2 class="subsection-title">4. The "Pre-Flight" Checklist</h2>
      <p>Before you publish, ask yourself these four questions:</p>
      <ul class="concept-list">
        <li>
          <strong>The 5-Second Test:</strong> Can a new user understand the <em>main point</em> of this chart in under 5 seconds without clicking anything?
        </li>
        <li>
          <strong>The Thumb Test:</strong> Are the buttons and filters large enough to be clicked by a thumb on a mobile device?
        </li>
        <li>
          <strong>The Link Test:</strong> If I share this URL, will it open to the specific filtered view I am looking at, or will it reset to the beginning? (State Management).
        </li>
        <li>
          <strong>The Gray-Scale Test:</strong> If I remove all color, is the data still legible through shapes and positions?
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* LESSON STRUCTURE */
.lesson-content {
  max-width: 800px;
  color: #222;
  line-height: 1.7;
  font-size: 1.05rem;
  padding-bottom: 60px;
}

.lesson-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.8em;
  letter-spacing: -1px;
}

.editorial-block {
  margin-bottom: 3.5rem;
}

.subsection-title {
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid #222;
  padding-bottom: 12px;
  margin-bottom: 25px;
  font-weight: 700;
}

.goal-callout {
  background: #f9f9f9;
  border-left: 5px solid #222;
  padding: 25px;
  margin-bottom: 40px;
  font-size: 1.15rem;
  font-style: italic;
}

/* LISTS */
.concept-list {
  list-style: none;
  padding-left: 0;
}

.concept-list > li {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.concept-list > li:last-child {
  border-bottom: none;
}

.concept-list strong {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 8px;
  color: #000;
}
</style>
