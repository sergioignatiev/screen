<template>
  <div>
    <VideoPleer
      v-if="episode"
      :movie="episode"
    />
    <h1 v-else class="text-white">Серия не найдена</h1>
  </div>
</template>


<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { series } from '~/data/series'


const route = useRoute()

const serieId = route.params.id as string
const episodeId = route.params.episode as string


const episode = computed(() => {
  const serie = series.find(
    (s) => s.id === serieId
  )

  return serie?.seasons
    .flatMap((season) => season.episodes)
    .find(
      (episode) => episode.id === episodeId
    )
})


if (!episode.value) {
  console.error(
    `Серия "${episodeId}" не найдена`
  )
}
useHead({
  title: episode.value
    ? serieId + ' - ' + episode.value.title
    : 'Серия не найдена',
})

definePageMeta({
  layout: 'watch',

})
</script>