<script setup>
import { ref } from 'vue'

/* -------------------------
   MAIN PLOT SECTIONS
------------------------- */
const plotSections = [
  { id: 1, title: 'Choosing the Right Plot', desc: 'Match your chart type to your data to communicate effectively.' },
  { id: 2, title: 'Data Literacy', desc: 'Understand what your numbers mean before plotting.' },
  { id: 3, title: 'Knowing Your Audience', desc: 'Tailor charts for technical or general viewers.' },
  { id: 4, title: 'Basic Chart Types', desc: 'Bar, line, scatter, pie charts — when to use each.' },
  { id: 5, title: 'Advanced Visualizations', desc: 'Heatmaps, area charts, bubble plots for complex data.' },
  { id: 6, title: 'Avoiding Misleading Graphs', desc: 'Truncated axes, cherry-picking data, and other pitfalls.' },
  { id: 7, title: 'Color & Design Principles', desc: 'Use color and layout to emphasize insights without misleading.' },
  { id: 8, title: 'Annotation & Storytelling', desc: 'Guide your audience with clear titles, labels, and callouts.' }
]

/* -------------------------
   SIDEBAR RESOURCES & VIDEOS
------------------------- */
const resources = [
  { id: 1, title: 'Storytelling with Data', link: 'https://www.storytellingwithdata.com/' },
  { id: 2, title: 'Fundamentals of Data Visualization', link: 'https://clauswilke.com/dataviz/' },
  { id: 3, title: 'Data Viz Catalogue', link: 'https://datavizcatalogue.com/' }
]

const videos = [
  { id: 1, title: 'Data Visualization Basics', link: 'https://www.youtube.com/watch?v=5Zg-C8AAIGg' },
  { id: 2, title: 'Choosing the Right Chart', link: 'https://www.youtube.com/watch?v=8EMW7io4rSI' }
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
      <h1 class="section-title">Plotting & Visualization</h1>

      <div v-for="section in plotSections" :key="section.id" class="plot-item">
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
.plot-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(0,0,0,0.15);
}

.plot-item h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.plot-item p {
  margin-bottom: 12px;
  color: var(--color-muted);
}

/* SIDEBAR */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

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

.video-thumb:hover {
  transform: scale(1.02);
  transition: 0.2s;
}

.video-thumb:hover img {
  filter: brightness(0.8);
}

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
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
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
