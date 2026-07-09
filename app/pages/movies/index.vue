<template>
  <div class="container mx-auto px-4 py-10">
    <div
      class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    >
      <NuxtLink
        v-for="movie in movies"
        :key="movie.id"
        :to="`/movies/${movie.id}`"
        class="group"
      >
        <div
          class="overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <NuxtImg
            :src="movie.posterSrc"
            :alt="movie.title"
            loading="lazy"
            class="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div class="p-3">
            <h3
              class="truncate text-center text-sm font-semibold text-white"
            >
              {{ movie.title }}
            </h3>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { movies } from '~/data/movies'
</script>