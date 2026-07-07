<template>
  <div class="flex min-h-screen items-center justify-center bg-linear-to-br from-zinc-950 via-black to-zinc-900 p-6">
    <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-[0_25px_80px_rgba(0,0,0,.6)]">
      
      <!-- Plyr требует видео элемент внутри обертки -->
      <video
        ref="videoRef"
        class="max-h-[90vh] w-auto max-w-[95vw]"
        playsinline
        loop
        :poster="movie.posterSrc"
      >
        <source :src="movie.videoSrc" type="video/mp4">
        <track
          :src="movie.subtitlesSrc"
          kind="subtitles"
          srclang="ru"
          label="Русский"
          default
        >
      </video>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import type { Movie } from '~/interfaces/movies'
import 'plyr/dist/plyr.css'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  movie: Movie
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
let player: Plyr | null = null

onMounted(async () => {
  const PlyrConstructor = (await import('plyr')).default
  
  if (videoRef.value) {
    player = new PlyrConstructor(videoRef.value, {
      autoplay: true,
      settings: ['captions', 'speed'],
      i18n: {
        speed: 'Скорость',
        normal: 'Обычная',
        captions: 'Субтитры',
      }
    })
  }
})

onUnmounted(() => {
  if (player) {
    player.destroy()
  }
})
</script>

<style>
/* Исправление проблемы с обрезкой текста в меню */
.plyr__menu__container {
  min-width: 200px !important;
}

/* Опционально: убедимся, что пункты меню отображаются корректно */
.plyr__control[role="menuitemradio"] {
  display: flex !important;
  align-items: center;
}
</style>