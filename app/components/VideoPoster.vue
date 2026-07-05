<template>
  <div
    v-if="movie"
    class="container mx-auto max-w-6xl px-4 py-10"
  >
    <div class="grid gap-10 lg:grid-cols-[320px_1fr]">
      <!-- Постер -->
      <div>
        <NuxtImg
          :src="movie.posterSrc"
          :alt="movie.title"
          class="w-full rounded-xl shadow-xl"
        />
      </div>

      <!-- Информация -->
      <div class="flex flex-col gap-6">
        <div>
          <h1 class="text-4xl font-bold">
            {{ movie.title }}
          </h1>

          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge color="primary" variant="soft">
              Action
            </UBadge>

            <UBadge color="neutral" variant="soft">
              Drama
            </UBadge>

            <UBadge color="warning" variant="soft">
              ★ 8.5
            </UBadge>
          </div>

          <p class="mt-6 leading-7 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem laboriosam cupiditate, pariatur eligendi velit
            accusamus mollitia architecto repudiandae nemo impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime necessitatibus dicta nisi voluptas porro adipisci.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
         <UButton
  :to="`/movies/${movie.id}/watch`"
  size="xl"
  icon="i-lucide-play"
>
  Watch
</UButton>
<a
  :href="movie.videoSrc"
  download
  class="inline-flex items-center justify-center gap-2 rounded-md bg-(--ui-bg-elevated) px-4 py-2 text-sm font-medium text-(--ui-text) ring ring-(--ui-border) hover:bg-(--ui-bg-accented) transition-colors"
>
  <UIcon name="i-lucide-download" size="26" />
  Download
</a>

        </div>

        <USeparator />

        <div class="grid grid-cols-2 gap-y-4 text-sm">
          <div>
            <span class="font-semibold">Release:</span>
            2026
          </div>

          <div>
            <span class="font-semibold">Duration:</span>
            107 min
          </div>

          <div>
            <span class="font-semibold">Country:</span>
            {{ movie.country || 'Unknown' }}
          </div>

          <div>
            <span class="font-semibold">Language:</span>
            English
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="py-20 text-center"
  >
    <h2 class="text-2xl font-bold">
      Movie not found
    </h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { movies } from '~/data/movies'

const route = useRoute()

const movieId = route.params.id as string

const movie = computed(() =>
  movies.find((m) => m.id === movieId)
)
</script>