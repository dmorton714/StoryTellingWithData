<script setup>
import { ref, markRaw } from 'vue'

// 1. Import week components
import WeekOne from '../Lessons/WeeklyWork/WeekOne.vue'
import WeekTwo from '../Lessons/WeeklyWork/WeekTwo.vue'
import WeekThree from '../Lessons/WeeklyWork/WeekThree.vue'
import WeekFour from '../Lessons/WeeklyWork/WeekFour.vue'
import WeekFive from '../Lessons/WeeklyWork/WeekFive.vue'
import WeekSix from '../Lessons/WeeklyWork/WeekSix.vue'

const weeks = [
  { id: 1, title: 'Week One', component: markRaw(WeekOne), desc: 'Intro to data storytelling fundamentals.' },
  { id: 2, title: 'Week Two', component: markRaw(WeekTwo), desc: 'Exploring datasets and asking better questions.' },
  { id: 3, title: 'Week Three', component: markRaw(WeekThree), desc: 'Data cleaning and preparation.' },
  { id: 4, title: 'Week Four', component: markRaw(WeekFour), desc: 'Visualization basics and chart selection.' },
  { id: 5, title: 'Week Five', component: markRaw(WeekFive), desc: 'Advanced storytelling techniques.' },
  { id: 6, title: 'Week Six', component: markRaw(WeekSix), desc: 'Final project and narrative building.' }
]

const inspiration = [
  { id: 1, title: 'NYT Visual Stories', link: 'https://www.nytimes.com/section/graphics' },
  { id: 2, title: 'FiveThirtyEight', link: 'https://fivethirtyeight.com/' }
]

const videos = [
  {
    id: 1,
    title: 'What is Data Storytelling?',
    link: 'https://www.youtube.com/watch?v=5Zg-C8AAIGg'
  },
  {
    id: 2,
    title: 'How to Tell Stories with Data',
    link: 'https://www.youtube.com/watch?v=8EMW7io4rSI'
  }
]

const activeComponent = ref(null)

function openWeek(week) {
  activeComponent.value = week.component
}

function goBack() {
  activeComponent.value = null
}

/* -------------------------
   VIDEO HELPERS
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
        <h1 class="section-title">Assignments</h1>

        <p class="lead-text">
          <strong>Welcome to Storytelling with Data!</strong> We designed this site to provide all the content we will cover so you have it ready to go at your fingertips and can always reference back for your needs at any time.
        </p>

        <div v-for="week in weeks" :key="week.id" class="week-item">
            <h2>{{ week.title }}</h2>
            <p>{{ week.desc }}</p>
            <button @click="openWeek(week)" class="btn btn-primary">Explore</button>
        </div>
      </div>

      <div v-else class="lesson-view-container">
        <div class="lesson-header">
          <button @click="goBack" class="btn btn-primary">← Back to Assignments</button>
        </div>

        <component :is="activeComponent" />
      </div>

    </div>

    <aside class="sidebar">

      <section class="sidebar-block">
        <h1 class="section-title">Inspiration</h1>

        <div v-for="item in inspiration" :key="item.id" class="link-item">
          <h2>{{ item.title }}</h2>
          <a :href="item.link" target="_blank">Visit</a>
        </div>
      </section>

      <section class="sidebar-block">
        <h1 class="section-title">Videos</h1>

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
        <iframe :src="getEmbed(activeVideo.link)" frameborder="0" allowfullscreen>
        </iframe>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* LAYOUT */
.editorial-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* SECTION TITLES */
.section-title {
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid var(--color-dark);
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* INTRO TEXT */
.lead-text {
  font-size: 1.25rem;
  color: var(--color-muted, #555);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.lead-text strong {
  color: var(--color-dark, #222);
}

/* MAIN CONTENT */
.week-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.week-item h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.week-item p {
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

.sidebar-block {
  width: 100%;
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

/* VIDEO */
.video-item {
  margin-bottom: 20px;
}

.video-thumb {
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
}

.video-thumb img {
  width: 100%;
  display: block;
}

/* PLAY BUTTON */
.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 20px;
  padding: 10px 14px;
  border-radius: 50%;
}

/* HOVER */
.video-thumb:hover {
  transform: scale(1.02);
  transition: 0.2s;
}

.video-thumb:hover img {
  filter: brightness(0.8);
}

/* VIDEO TITLE */
.video-title {
  font-size: 0.85rem;
  margin-top: 6px;
  color: var(--color-muted);
}

/* MODAL */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
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
