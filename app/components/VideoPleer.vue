<template>
  <div class="flex min-h-screen items-center justify-center bg-linear-to-br from-zinc-950 via-black to-zinc-900 p-6">
    <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-[0_25px_80px_rgba(0,0,0,.6)]">

      <video
        ref="videoRef"
        class="max-h-[90vh] w-auto max-w-[95vw]"
        controls
        playsinline
        loop
        preload="metadata"
        :poster="movie.posterSrc"
        autoplay="true"
      >
        <source :src="movie.videoSrc" type="video/mp4">

        <track
          :src="movie.subtitlesSrc"
          kind="subtitles"
          srclang="ru"
          label="Русский"
          :default="subtitlesEnabled"
        >
      </video>

      <!-- затемнение снизу -->
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <!-- кнопка субтитров -->
      <button
        class="absolute right-5 bottom-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95"
        :class="subtitlesEnabled ? 'ring-2 ring-sky-400 shadow-lg shadow-sky-500/40' : 'opacity-70'"
        title="Субтитры"
        @click="toggleSubtitles"
      >
        💬
      </button>

      <!-- статус -->
      <div class="absolute top-5 left-5 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur">
        {{ subtitlesEnabled ? '🟢 Субтитры включены' : '⚪ Субтитры выключены' }}
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '~/interfaces/movies';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  movie: Movie
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const subtitlesEnabled = ref(true)

const toggleSubtitles = () => {
  const track = videoRef.value?.textTracks[0]
  if (!track) return

  subtitlesEnabled.value = !subtitlesEnabled.value
  track.mode = subtitlesEnabled.value ? 'showing' : 'disabled'
}
</script>