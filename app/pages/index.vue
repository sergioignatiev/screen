<template>
  <div class="full-screen-container">
    <h2>Tom and Jerry lorem888</h2>
  
    <video
      id="mainVideo"
      controls
      playsinline
      loop
      preload="metadata"
      poster="/tom.webp"
      class="video-player"
    >
      <source
        src="/tomnjerry.mp4"
        type="video/mp4"
      >

      <track
        id="ruTrack"
        src="/subtitles.ru.vtt"
        kind="subtitles"
        srclang="ru"
        label="Русский"
        default
      >
    </video>

    <!-- Иконка субтитров -->
    <button
      class="subtitle-icon"
      :class="{ active: subtitlesEnabled }"
      title="Субтитры"
      @click="toggleSubtitles"
    >
      💬
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const subtitlesEnabled = ref(true)

const toggleSubtitles = () => {
  const video = document.getElementById('mainVideo') as HTMLVideoElement
  if (!video) return

  const track = video.textTracks[0]
  if (track) {
    subtitlesEnabled.value = !subtitlesEnabled.value
    track.mode = subtitlesEnabled.value ? 'showing' : 'disabled'
  }
}
</script>

<style scoped>
.full-screen-container {
  width: 100vw;           /* на всю ширину экрана */
  height: 100vh;          /* на всю высоту экрана */
  margin: 0;
  padding: 0;
  background: #000;
  position: relative;
  overflow: hidden;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: contain;    /* contain — чтобы не обрезалось */
  /* object-fit: cover; */ /* если хочешь чтобы полностью заполняло (может обрезать) */
  background: #000;
}

/* Иконка субтитров */
.subtitle-icon {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 56px;
  height: 56px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 20;
}

.subtitle-icon:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

.subtitle-icon.active {
  background: rgba(34, 197, 151, 0.9);
}
</style>
