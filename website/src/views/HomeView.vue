<script setup>
import { ref, markRaw } from 'vue'
import { useRouter } from 'vue-router'


// 1. Import week components
import WeekOne from '../Lessons/WeeklyWork/WeekOne.vue'
import WeekTwo from '../Lessons/WeeklyWork/WeekTwo.vue'
import WeekThree from '../Lessons/WeeklyWork/WeekThree.vue'
import WeekFour from '../Lessons/WeeklyWork/WeekFour.vue'
import WeekFive from '../Lessons/WeeklyWork/WeekFive.vue'
import WeekSix from '../Lessons/WeeklyWork/WeekSix.vue'
import WeekOnePractice from '../Lessons/WeeklyWork/Practice/WeekOnePractice.vue'
import WeekTwoPractice from '../Lessons/WeeklyWork/Practice/WeekTwoPractice.vue'
import WeekThreePractice from '../Lessons/WeeklyWork/Practice/WeekThreePractice.vue'
import WeekFourPractice from '../Lessons/WeeklyWork/Practice/WeekFourPractice.vue'
import WeekFivePractice from '../Lessons/WeeklyWork/Practice/WeekFivePractice.vue'
import WeekSixPractice from '../Lessons/WeeklyWork/Practice/WeekSixPractice.vue'

const router = useRouter()

const weeks = [
  { 
    id: 1, 
    title: 'Week One', 
    component: markRaw(WeekOne), 
    practiceComponent: markRaw(WeekOnePractice),
    desc: 'Intro to data storytelling fundamentals.' 
  },
  { 
    id: 2, 
    title: 'Week Two', 
    component: markRaw(WeekTwo), 
    practiceComponent: markRaw(WeekTwoPractice),
    desc: 'Asking better questions, choosing the right data, and understanding your audience.' 
  },
  { 
    id: 3, 
    title: 'Week Three', 
    component: markRaw(WeekThree), 
    practiceComponent: markRaw(WeekThreePractice),
    desc: 'Choosing the right chart to clearly communicate your message.' 
  },
  { 
    id: 4, 
    title: 'Week Four', 
    component: markRaw(WeekFour), 
    practiceComponent: markRaw(WeekFourPractice),
    desc: 'Using design, color, and visual hierarchy to guide attention and improve clarity.' 
  },
  { 
    id: 5, 
    title: 'Week Five', 
    component: markRaw(WeekFive), 
    practiceComponent: markRaw(WeekFivePractice),
    desc: 'Understanding bias, avoiding misleading visuals, and communicating data ethically.' 
  },
  { 
    id: 6, 
    title: 'Week Six', 
    component: markRaw(WeekSix), 
    practiceComponent: markRaw(WeekSixPractice),
    desc: 'Building a narrative, using annotation, and communicating insights effectively.' 
  }
]

const dataResourceLinks = [
  { id: 1, title: 'Kaggle', link: 'https://www.kaggle.com/' },
  { id: 2, title: 'Data.gov', link: 'https://data.gov/' },
  { id: 3, title: 'FiveThirtyEight', link: 'https://data.fivethirtyeight.com/' },
  { id: 4, title: 'Google Dataset Search', link: 'https://datasetsearch.research.google.com/' },
  { id: 5, title: 'Awesome Public Datasets', link: 'https://github.com/awesomedata/awesome-public-datasets' },
  { id: 6, title: 'UCI Machine Learning Repository', link: 'https://archive.ics.uci.edu/' },
  { id: 7, title: 'NASA', link: 'https://data.nasa.gov/dataset/' },
]

const featuredVideos = [
  {
    id: 1,
    title: 'What is Data Storytelling?',
    link: 'https://www.youtube.com/watch?v=5Zg-C8AAIGg'
  },
  {
    id: 2,
    title: 'How to Tell Stories with Data',
    link: 'https://www.youtube.com/watch?v=8EMW7io4rSI'
  },
    {
    id: 3,
    title: 'Data Literacy and the Art of Asking Questions',
    link: 'https://youtu.be/GhqTvWwMOYw?si=Der9QqjZfxmhMDqI'
  },
  {
    id: 4,
    title: 'The Art of Asking the Right Questions in Data Analytics',
    link: 'https://youtu.be/UCjw488nR_Y?si=VvRteYyNKAl9z7Z8'
  }
]

const activeComponent = ref(null)

function openWeek(week) {
  activeComponent.value = week.component
}

function openPractice(week) {
  activeComponent.value = week.practiceComponent
}

function goBack() {
  activeComponent.value = null
}

function goToVideos() {
  router.push('/videos')
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
        <h1 class="section-title">Course Overview</h1>

        <p class="lead-text">
          <strong>Welcome to Storytelling with Data!</strong> This site is your central resource for the workshop. Each week includes a lesson to review before class and a set of practice exercises to help you apply what you’ve learned.
        </p>

        <p class="lead-text">
          Start by reviewing the lesson, then move to Practice & Apply to reinforce the concepts. You can return to these materials at any time as a reference as you build your final project and strengthen your data storytelling skills.
        </p>

        <p class="lead-text">
          In addition to the weekly lessons, the tabs at the top of the page provide examples and reference material across different contexts. Data storytelling appears in different formats and environments, check out the Inspiration page for real-world examples to explore and learn from.
        </p>
        <div v-for="week in weeks" :key="week.id" class="week-item">
          <h2>{{ week.title }}</h2>
          <p>{{ week.desc }}</p>

          <div class="week-actions">
            <button @click="openWeek(week)" class="btn btn-primary">Review Lesson</button>
            <button @click="openPractice(week)" class="btn btn-secondary">Practice & Apply</button>
          </div>
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
        <h1 class="section-title">Data Sources</h1>

        <div v-for="item in dataResourceLinks" :key="item.id" class="link-item">
          <h2>{{ item.title }}</h2>
          <a :href="item.link" target="_blank">Visit</a>
        </div>
      </section>

      <section class="sidebar-block">
        <h1 class="section-title">Featured Videos</h1>

        <div v-for="video in featuredVideos" :key="video.id" class="video-item">

          <div class="video-thumb" @click="openVideo(video)">
            <img :src="getThumbnail(video.link)" />
            <div class="play-overlay">▶</div>
          </div>

          <p class="video-title">{{ video.title }}</p>
        </div>
        <button @click="goToVideos" class="btn btn-secondary">
          More Videos
        </button>
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
