<script setup>
import { ref } from 'vue'

/* -------------------------
   MAIN CONTENT
------------------------- */
const sections = [
  { id: 1, title: 'Introduction to Web Visualizations', desc: 'Why web is the perfect medium for interactive storytelling.' },
  { id: 2, title: 'Web Frameworks & Libraries', desc: 'D3.js, Plotly, Chart.js, Vega, Three.js — pros, cons, and when to use.' },
  { id: 3, title: 'Interactivity & UX', desc: 'Hover states, filtering, zooming, and other interaction patterns.' },
  { id: 4, title: 'Responsive Design', desc: 'Optimizing for desktop, tablet, and mobile layouts.' },
  { id: 5, title: 'Performance & Optimization', desc: 'Lazy loading, throttling, handling large datasets efficiently.' },
  { id: 6, title: 'Embedding Charts & Dashboards', desc: 'How to integrate interactive visualizations into stories and websites.' },
  { id: 7, title: 'Accessibility & ARIA', desc: 'Ensuring your visualizations are accessible to all users.' },
  { id: 8, title: 'Best Practices & Pitfalls', desc: 'Common mistakes to avoid when creating web visualizations.' }
]

/* -------------------------
   SIDEBAR RESOURCES & VIDEOS
------------------------- */
const resources = [
  { id: 1, title: 'ObservableHQ', link: 'https://observablehq.com/' },
  { id: 2, title: 'D3 Gallery', link: 'https://observablehq.com/@d3/gallery' },
  { id: 3, title: 'Plotly Documentation', link: 'https://plotly.com/javascript/' }
]

const videos = [
  { id: 1, title: 'Introduction to D3.js', link: 'https://www.youtube.com/watch?v=_8V5o2UHG0E' },
  { id: 2, title: 'Interactive Charts with Plotly', link: 'https://www.youtube.com/watch?v=E7YjZ2e3F0M' }
]

/* -------------------------
   VIDEO LOGIC
------------------------- */
const activeVideo = ref(null)

function getYouTubeId(link) {
  const match = link?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/)
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

    <!-- MAIN CONTENT -->
    <div class="main-content">
      <h1 class="section-title">Web & Interactive Visualizations</h1>

      <div v-for="section in sections" :key="section.id" class="web-item">
        <h2>{{ section.title }}</h2>
        <p>{{ section.desc }}</p>
        <button class="btn btn-primary">Learn More</button>
      </div>
    </div>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <!-- RESOURCES -->
      <section class="sidebar-block">
        <h1 class="section-title">Resources</h1>
        <div v-for="item in resources" :key="item.id" class="link-item">
          <h2>{{ item.title }}</h2>
          <a :href="item.link" target="_blank">Visit</a>
        </div>
      </section>

      <!-- VIDEOS -->
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

    <!-- VIDEO MODAL -->
    <div v-if="activeVideo" class="video-modal" @click="closeVideo">
      <div class="video-modal-content" @click.stop>
        <iframe :src="getEmbed(activeVideo.link)" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* LAYOUT & SIDEBAR same as Data/Plot pages */
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

.main-content h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.main-content p {
  margin-bottom: 12px;
  color: var(--color-muted);
}

/* SIDEBAR */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.link-item, .video-item {
  padding: 10px 0;
}

.link-item h2, .video-item p {
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

/* MODAL */
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
