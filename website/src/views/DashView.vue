<script setup>
import { ref, markRaw } from 'vue'

/* -------------------------
   1. IMPORT DASHBOARD COMPONENTS
   (Make sure to create these files in src/Dashboards/)
------------------------- */
import DashSectionOne from '../Dashboards/DashSectionOne.vue'
import DashSectionTwo from '../Dashboards/DashSectionTwo.vue'
import DashSectionThree from '../Dashboards/DashSectionThree.vue'
import DashSectionFour from '../Dashboards/DashSectionFour.vue'
import DashSectionFive from '../Dashboards/DashSectionFive.vue'
import DashSectionSix from '../Dashboards/DashSectionSix.vue'

/* -------------------------
   MAIN SECTIONS: Dashboard Focus
------------------------- */
const sections = [
  {
    id: 1,
    title: 'Defining the User Persona',
    component: markRaw(DashSectionOne),
    desc: 'Understanding who will use the dashboard and what specific questions they need to answer daily.'
  },
  {
    id: 2,
    title: 'Visual Hierarchy & Layout',
    component: markRaw(DashSectionTwo),
    desc: 'Organizing information using the "F-Pattern" to ensure the most critical KPIs are seen first.'
  },
  {
    id: 3,
    title: 'Designing for Interactivity',
    component: markRaw(DashSectionThree),
    desc: 'Implementing filters, drill-downs, and tooltips to allow users to explore data without clutter.'
  },
  {
    id: 4,
    title: 'Real-time vs. Static Data',
    component: markRaw(DashSectionFour),
    desc: 'Deciding between live data streams and scheduled snapshots based on technical constraints and user needs.'
  },
  {
    id: 5,
    title: 'Color Theory & Accessibility',
    component: markRaw(DashSectionFive),
    desc: 'Using color strategically to highlight alerts while ensuring high contrast for all users.'
  },
  {
    id: 6,
    title: 'Performance & Optimization',
    component: markRaw(DashSectionSix),
    desc: 'Techniques for ensuring your dashboard loads quickly, even when handling large-scale datasets.'
  }
]

/* -------------------------
   COMPONENT ROUTING LOGIC
------------------------- */
const activeComponent = ref(null)

function openSection(section) {
  activeComponent.value = section.component
}

function goBack() {
  activeComponent.value = null
}

/* -------------------------
   SIDEBAR CONTENT
------------------------- */
const resources = [
  {
    id: 1,
    title: 'The Big Book of Dashboards',
    link: 'https://bigbookofdashboards.com/'
  },
  {
    id: 2,
    title: 'Dashboard Design Best Practices',
    link: 'https://www.tableau.com/learn/articles/dashboard-design-best-practices'
  }
]

const videos = [
  {
    id: 1,
    title: '5 Tips for Better Dashboard Design',
    link: 'https://www.youtube.com/watch?v=LpUvdfIUP7E'
  },
  {
    id: 2,
    title: 'Designing with Interactivity',
    link: 'https://www.youtube.com/watch?v=2vS_6T73-yU'
  }
]

/* -------------------------
   VIDEO LOGIC
------------------------- */
const activeVideo = ref(null)

function getYouTubeId(link) {
  const match = link?.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
  )
  return match ? match[1] : null
}

function getThumbnail(link) {
  const id = getYouTubeId(link)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''
}

function getEmbed(link) {
  const id = getYouTubeId(link)
  return id ? `https://www.youtube.com/embed/${id}` : ''
}

function openVideo(video) {
  activeVideo.value = video
}

function closeVideo() {
  activeVideo.value = null
}
</script>

<template>
  <div class="editorial-layout">

    <div class="main-content">

      <div v-if="!activeComponent" class="list-view-container">
        <h1 class="section-title">Dashboard Design</h1>

        <div v-for="section in sections" :key="section.id" class="data-item">
          <h2>{{ section.title }}</h2>
          <p>{{ section.desc }}</p>
          <button @click="openSection(section)" class="btn btn-primary">View Module</button>
        </div>
      </div>

      <div v-else class="lesson-view-container">
        <div class="lesson-header">
          <button @click="goBack" class="btn btn-primary">← Back to Topics</button>
        </div>

        <component :is="activeComponent" />
      </div>

    </div>

    <aside class="sidebar">

      <section class="sidebar-block">
        <h1 class="section-title">Case Studies</h1>
        <div v-for="item in resources" :key="item.id" class="link-item">
          <h2>{{ item.title }}</h2>
          <a :href="item.link" target="_blank">Read More</a>
        </div>
      </section>

      <section class="sidebar-block">
        <h1 class="section-title">Tutorials</h1>
        <div v-for="video in videos" :key="video.id" class="video-item">
          <div class="video-thumb" @click="openVideo(video)">
            <img :src="getThumbnail(video.link)" />
            <div class="play-overlay">▶</div>
          </div>
          <p class="video-title">{{ video.title }}</p>
        </div>
      </section>

    </aside>

    <div v-if="activeVideo" class="video-modal" @click="closeVideo">
      <div class="video-modal-content" @click.stop>
        <iframe :src="getEmbed(activeVideo.link)" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* SAME LAYOUT SYSTEM */
.editorial-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section-title {
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid var(--color-dark);
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* MAIN CONTENT */
.data-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(0,0,0,0.15);
}

.data-item h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.data-item p {
  margin-bottom: 12px;
  color: var(--color-muted);
}

.lesson-header {
  margin-bottom: 30px;
}

/* SIDEBAR */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* LINKS */
.link-item {
  padding: 10px 0;
}

.link-item h2 {
  font-size: 1rem;
}

.link-item a {
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: bold;
}

/* VIDEO (same as before) */
.video-thumb {
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
}

.video-thumb img {
  width: 100%;
}

.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 10px;
  border-radius: 50%;
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.video-modal-content {
  width: 90%;
  max-width: 800px;
  aspect-ratio: 16/9;
}

.video-modal-content iframe {
  width: 100%;
  height: 100%;
}

/* MOBILE */
@media (max-width: 800px) {
  .editorial-layout {
    grid-template-columns: 1fr;
  }
}
</style>
