<template>
  <main class="mx-auto max-w-7xl px-6 py-10 text-white">

    <!-- Hero -->
    <section class="mb-16">
      <h1 class="mb-5 text-4xl font-bold md:text-6xl">
        French Movies and TV Shows with Subtitles
      </h1>

      <p class="max-w-3xl text-lg text-zinc-300">
        Watch French movies and TV shows with subtitles online.
        Discover French cinema, explore popular series, and improve
        your French listening skills through immersive viewing.
      </p>
    </section>


    <!-- Featured Movies -->
    <section class="mb-16">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-2xl font-bold">
          Featured French Movies
        </h2>

        <NuxtLink
          to="/movies"
          class="text-sm text-zinc-400 hover:text-white"
        >
          View all
        </NuxtLink>
      </div>


      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        <NuxtLink
          v-for="movie in movies"
          :key="movie.id"
          :to="`/movies/${movie.id}`"
          class="group"
        >
          <div class="overflow-hidden rounded-xl bg-zinc-900">

            <NuxtImg
              :src="movie.poster"
              :alt="`${movie.title} poster`"
              class="aspect-2/3 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div class="p-3">
              <h3 class="truncate text-sm font-semibold">
                {{ movie.title }}
              </h3>
            </div>

          </div>
        </NuxtLink>
      </div>
    </section>


    <!-- Series -->
    <section class="mb-16">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-2xl font-bold">
          Popular French TV Shows
        </h2>

        <NuxtLink
          to="/series"
          class="text-sm text-zinc-400 hover:text-white"
        >
          View all
        </NuxtLink>
      </div>


      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">

        <NuxtLink
          v-for="series in popularSeries"
          :key="series.id"
          :to="`/series/${series.id}`"
          class="group"
        >

          <div class="overflow-hidden rounded-xl bg-zinc-900">

            <NuxtImg
              :src="series.poster"
              :alt="`${series.title} poster`"
              class="aspect-[2/3] w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div class="p-3">
              <h3 class="truncate text-sm font-semibold">
                {{ series.title }}
              </h3>
            </div>

          </div>

        </NuxtLink>

      </div>
    </section>


    <!-- Categories -->
    <section class="mb-16">

      <h2 class="mb-6 text-2xl font-bold">
        Browse French Content
      </h2>


      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">

        <NuxtLink
          v-for="category in categories"
          :key="category.name"
          :to="category.url"
          class="rounded-xl bg-zinc-900 p-6 transition hover:bg-zinc-800"
        >

          <h3 class="mb-2 text-lg font-semibold">
            {{ category.name }}
          </h3>

          <p class="text-sm text-zinc-400">
            {{ category.description }}
          </p>

        </NuxtLink>

      </div>

    </section>


    <!-- SEO text -->
    <section class="max-w-4xl border-t border-zinc-800 pt-10">

      <h2 class="mb-4 text-2xl font-bold">
        Watch French Movies and Series Online
      </h2>

      <p class="leading-7 text-zinc-300">
        Explore French movies and TV shows with subtitles.
        Our collection includes classic French cinema, modern films,
        and popular series. Watch authentic French content and enjoy
        subtitles that help you understand dialogue and improve your
        language skills.
      </p>

    </section>

  </main>
</template>


<script setup lang="ts">
import { movies } from '~/data/movies'


const popularSeries = [
  {
    id: 'lupin',
    title: 'Lupin',
    poster: '/placeholder.jpg'
  },
  {
    id: 'call-my-agent',
    title: 'Call My Agent!',
    poster: '/placeholder.jpg'
  },
  {
    id: 'series-3',
    title: 'French Series',
    poster: '/placeholder.jpg'
  }
]


const categories = [
  {
    name: 'French Comedy',
    description: 'Funny French movies and series',
    url: '/genres/comedy'
  },
  {
    name: 'French Drama',
    description: 'Drama and emotional stories',
    url: '/genres/drama'
  },
  {
    name: 'French Classics',
    description: 'Classic French cinema',
    url: '/genres/classics'
  },
  {
    name: 'French Crime',
    description: 'Crime and thriller content',
    url: '/genres/crime'
  }
]


useSeoMeta({
  title: 'French Movies and TV Shows with Subtitles | Screen',
  description:
    'Watch French movies and TV shows with subtitles online. Discover French cinema, series, and improve your French through immersive viewing.',
  ogTitle:
    'French Movies and TV Shows with Subtitles | Screen',
  ogDescription:
    'Discover French movies and series with subtitles.',
  ogImage: '/logo.jpg',
  ogType: 'website'
})

</script>