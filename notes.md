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