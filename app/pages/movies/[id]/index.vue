<template>
  <div v-if="movie">
    <!-- Передаем найденный объект фильма в компонент -->
    <VideoPoster :movie="movie" />
  </div>
  <div v-else class="flex h-screen items-center justify-center text-white">
    <h1>Фильм не найден</h1>
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
</script>