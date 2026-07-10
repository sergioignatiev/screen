<template>
  <div>
    <NuxtLink
  :to="`/movies/${movieId}`"
  class="mb-6 inline-flex items-center gap-2 text-zinc-300 hover:text-white"
>
  <Icon name="heroicons:arrow-left" size="20" />
  <span>Назад к фильмам</span>
</NuxtLink>
  <VideoPleer v-if="movie" :movie="movie" />
  </div>
</template>

<script lang="ts" setup>
import { movies } from '~/data/movies'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = route.params.id as string

// Ищем фильм в массиве
const movie = computed(() => {
  return movies.find((m) => m.id === movieId)
})

// Если фильма нет, можно добавить логику редиректа или 404
if (!movie.value) {
  console.error(`Фильм с id "${movieId}" не найден`)
  // Например: await navigateTo('/')
}
definePageMeta({
  layout: 'watch'
})


</script>

<style>

</style>