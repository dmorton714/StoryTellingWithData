<script setup>
import { ref, markRaw } from 'vue'

/* -------------------------
   1. IMPORT YOUR COMPONENTS
   (Make sure to create these files in your project!)
------------------------- */
import DataSectionOne from '../Data/DataSectionOne.vue'
import DataSectionTwo from '../Data/DataSectionTwo.vue'
import DataSectionThree from '../Data/DataSectionThree.vue'
import DataSectionFour from '../Data/DataSectionFour.vue'
import DataSectionFive from '../Data/DataSectionFive.vue'
import DataSectionSix from '../Data/DataSectionSix.vue'


/* -------------------------
   MAIN SECTIONS
------------------------- */
const sections = [
  {
    id: 1,
    title: 'Ethics in Data',
    component: markRaw(DataSectionOne),
    desc: 'Understanding responsibility, privacy, and the impact data decisions have on individuals and society.'
  },
  {
    id: 2,
    title: 'Choosing the Right Data',
    component: markRaw(DataSectionTwo),
    desc: 'Selecting relevant, reliable datasets that align with your questions and goals.'
  },
  {
    id: 3,
    title: 'Cleaning Data',
    component: markRaw(DataSectionThree),
    desc: 'Handling missing values, inconsistencies, and preparing raw data for analysis.'
  },
  {
    id: 4,
    title: 'Exploratory Data Analysis (EDA)',
    component: markRaw(DataSectionFour),
    desc: 'Identifying patterns, trends, and anomalies before building visualizations.'
  },
  {
    id: 5,
    title: 'Bias & Misleading Visuals',
    component: markRaw(DataSectionFive),
    desc: 'Recognizing how data and visual choices can distort truth or mislead audiences.'
  },
  {
    id: 6,
    title: 'Communicating Insights',
    component: markRaw(DataSectionSix),
    desc: 'Turning analysis into clear, compelling narratives that drive understanding.'
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
    title: 'Fundamentals of Data Visualization',
    link: 'https://clauswilke.com/dataviz/'
  },
  {
    id: 2,
    title: 'Storytelling with Data',
    link: 'https://www.storytellingwithdata.com/'
  }
]

const videos = [
  {
    id: 1,
    title: 'The Importance of Data Ethics',
    link: 'https://www.youtube.com/watch?v=ua-CiDNNj30'
  },
  {
    id: 2,
    title: 'Data Cleaning Basics',
    link: 'https://www.youtube.com/watch?v=E7YjZ2e3F0M'
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
        <h1 class="section-title">Data Foundations</h1>

        <div v-for="section in sections" :key="section.id" class="data-item">
          <h2>{{ section.title }}</h2>
          <p>{{ section.desc }}</p>
          <button @click="openSection(section)" class="btn btn-primary">Learn More</button>
        </div>
      </div>

      <div v-else class="lesson-view-container">
        <div class="lesson-header">
          <button @click="goBack" class="btn btn-primary">← Back to Foundations</button>
        </div>

        <component :is="activeComponent" />
      </div>

    </div>

    <aside class="sidebar">

      <section class="sidebar-block">
        <h1 class="section-title">Resources</h1>

        <div v-for="item in resources" :key="item.id" class="link-item">
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

/* VIDEO */
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
