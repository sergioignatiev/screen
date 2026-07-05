<template>
  <div>
    <NuxtLink v-for="movie in movies" :key="movie.id" :to="`/movies/${movie.id}`">
      <LazyNuxtImg
        :src="movie.posterSrc"
        :alt="movie.title"
        class="w-48 h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { movies } from '~/data/movies';
</script>

<style>

</style>