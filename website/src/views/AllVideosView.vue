<script setup>
// Video data
import { useRouter } from 'vue-router'

const router = useRouter()

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
  },
  {
    id: 5,
    title: 'Using the powers of big data for good in a world of alt facts',
    link: 'https://youtu.be/bKfd49zqqhs?si=1tBGpPBMcsEuUD3V'
  },
  {
    id: 6,
    title: 'Why everyone should be data literate',
    link: 'https://youtu.be/8ovyQZ_Z8Xs?si=sAHyk284pS24nIh8'
  },
    {
    id: 7,
    title: 'Making data mean more through storytelling',
    link: 'https://youtu.be/6xsvGYIxJok?si=lCQACrcXEmmeIck4'
  },
  {
    id: 8,
    title: 'The Power in Effective Data Storytelling',
    link: 'https://youtu.be/0e52QfQngrM?si=5RJVzhRcUhcSHRSN'
  },
  {
    id: 9,
    title: 'The Importance of Data Ethics',
    link: 'https://www.youtube.com/watch?v=ua-CiDNNj30'
  },
  {
    id: 10,
    title: 'Data Cleaning Basics',
    link: 'https://www.youtube.com/watch?v=E7YjZ2e3F0M'
  }
]

// Helper to get YouTube embed URL
// Helper to get YouTube embed URL
function getEmbedUrl(link) {
  const match = link?.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
  )
  return match ? `https://www.youtube.com/embed/${match[1]}` : ''
}

function goHome() {
  router.push('/')
}

</script>

<template>
  <div class="videos-page">
    <h1 class="page-title">Video Library</h1>

    <p class="page-intro">
      Explore videos that reinforce the concepts from each week, including storytelling fundamentals, design, and real-world examples.
    </p>

    <div class="video-grid">
      <div v-for="video in videos" :key="video.id" class="video-card">
        <iframe
          :src="getEmbedUrl(video.link)"
          frameborder="0"
          allowfullscreen
        ></iframe>

        <p class="video-title">{{ video.title }}</p>
      </div>
    </div>
  </div>
  <div class="home-button-container">
  <button @click="goHome" class="btn btn-primary">
    Return To Course Overview
  </button>
</div>
</template>

<style scoped>
.videos-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.page-intro {
  color: #555;
  margin-bottom: 30px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.video-card iframe {
  width: 100%;
  height: 200px;
  border-radius: 8px;
}

.video-title {
  margin-top: 10px;
  font-weight: 600;
}

.home-button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>