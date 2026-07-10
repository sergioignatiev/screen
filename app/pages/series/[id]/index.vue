<template>
  <div v-if="serie">
    <!-- Передаем найденный сериал в компонент -->
    <VideoPosterSeries :serie="serie" />
  </div>

  <div
    v-else
    class="flex h-screen items-center justify-center text-white"
  >
    <h1>Сериал не найден</h1>
  </div>
</template>


<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { series } from '~/data/series'


const route = useRoute()

const serieId = route.params.id as string


// Ищем сериал в массиве
const serie = computed(() => {
  return series.find((s) => s.id === serieId)
})


if (!serie.value) {
  console.error(`Сериал с id "${serieId}" не найден`)
  // await navigateTo('/')
}


useHead({
  title: serie.value
    ? serie.value.title
    : 'Сериал не найден',
})
</script>