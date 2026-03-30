Your “Quick Prompt” for Future Dev (SAVE THIS)

You can reuse this to spin up future projects:

Project UI System Summary:

Built a Vue 3 app with a global layout system
Uses a NavBar component with mobile hamburger menu
Centralized styling using:
variables.css (colors, spacing, theme)
base.css (global resets)
components.css (reusable UI classes)

Core UI classes:

.container → page width control
.section → vertical spacing blocks
.card → data visualization containers
.btn, .btn-primary, .btn-secondary → buttons
.title, .subtitle → typography

Theme:

Primary greens: #4cbb17, #48872b, #39542c, #293325
Base: black + white

Layout pattern:

LayOut.vue wraps all pages
<router-view /> renders content inside layout
Designed for data storytelling + dashboards


---
"I am building a Vue.js educational website for a 6-week 'Data Storytelling' workshop. The site uses a clean, 'editorial' design aesthetic focused on reducing cognitive load.

We have already built the main routing architecture, WeekOne.vue (Fundamentals), WeekTwo.vue (Data Types), and an 8-part sub-module on Plotting & Visualization.

I need you to act as an instructional designer and frontend developer to help me draft the content and code for WeekThree.vue (Data Cleaning and Preparation).

Please use the following HTML/CSS template to ensure the formatting perfectly matches the rest of the site. The content should cover the realities of messy data: handling missing values, identifying outliers, standardizing formats, and why data cleaning is a crucial part of the storytelling process.

Here is the component template you MUST use for your response:
--- 