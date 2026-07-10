<template>
  <div
    v-if="serie"
    class="container mx-auto max-w-6xl px-4 py-10"
  >
    <div class="grid gap-10 lg:grid-cols-[320px_1fr]">

      <!-- Постер -->
      <div>
        <NuxtImg
          :src="serie.posterSrc"
          :alt="serie.title"
          class="w-full rounded-xl shadow-xl"
        />
      </div>

      <!-- Информация -->
      <div class="flex flex-col gap-6">

        <div>
          <h1 class="text-4xl font-bold">
            {{ serie.title }}
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
          </p>
        </div>


        <!-- Сезоны -->
        <div class="flex flex-col gap-6">

          <div
            v-for="season in serie.seasons"
            :key="season.seasonNumber"
            class="rounded-xl bg-zinc-900 p-5"
          >
            <h2 class="mb-4 text-2xl font-bold text-white">
              Season {{ season.seasonNumber }}
            </h2>


            <div class="flex flex-col gap-3">

              <UButton
                v-for="episode in season.episodes"
                :key="episode.id"
                :to="`/series/${serie.id}/${episode.id}`"
                variant="soft"
                icon="i-lucide-play"
                class="justify-start"
              >
                Episode {{ episode.episodeNumber }} -
                {{ episode.title }}
              </UButton>

            </div>
          </div>

        </div>


        <USeparator />


        <!-- Информация -->
        <div class="grid grid-cols-2 gap-y-4 text-sm">

          <div>
            <span class="font-semibold">
              Country:
            </span>

            {{ serie.country || 'Unknown' }}
          </div>


          <div>
            <span class="font-semibold">
              Language:
            </span>

            {{ serie.language }}
          </div>


          <div>
            <span class="font-semibold">
              Seasons:
            </span>

            {{ serie.seasons.length }}
          </div>


          <div>
            <span class="font-semibold">
              Episodes:
            </span>

            {{
              serie.seasons.reduce(
                (total, season) =>
                  total + season.episodes.length,
                0
              )
            }}
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
      Series not found
    </h2>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { series } from '~/data/series'


const route = useRoute()

const serieId = route.params.id as string


const serie = computed(() =>
  series.find((s) => s.id === serieId)
)
</script>